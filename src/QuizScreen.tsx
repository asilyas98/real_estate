import React, { useState, useCallback, useRef, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, SafeAreaView, StatusBar, Animated,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { useTheme } from './theme';
import { Question } from './data';
import { QuizResults } from './ResultsScreen';
import { saveSession, clearSession } from './storage';

const LETTERS = ['A', 'B', 'C', 'D'];

interface Props {
  questions: Question[];
  mode: 'quiz' | 'flash';
  category: string;
  onComplete: (results: QuizResults) => void;
  onBack: () => void;
}

export default function QuizScreen({ questions, mode, category, onComplete, onBack }: Props) {
  const T = useTheme();
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flipped, setFlipped] = useState(false);

  // Animated progress bar
  const progressAnim = useRef(new Animated.Value(0)).current;

  // Card flip animation
  const flipAnim = useRef(new Animated.Value(0)).current;

  const total = questions.length;
  const q = questions[idx];
  const answered = answers.hasOwnProperty(q.id);
  const chosenIdx = answers[q.id];
  const isLast = idx === total - 1;

  // Animate progress bar whenever idx changes
  useEffect(() => {
    Animated.spring(progressAnim, {
      toValue: ((idx + 1) / total) * 100,
      friction: 8,
      tension: 60,
      useNativeDriver: false, // width % can't use native driver
    }).start();
  }, [idx, total]);

  // Reset flip when question changes
  useEffect(() => {
    flipAnim.setValue(0);
    setFlipped(false);
  }, [idx]);

  const flipToAnswer = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Animated.spring(flipAnim, {
      toValue: 1,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();
    setFlipped(true);
  }, [flipAnim]);

  // Interpolate for front/back faces
  const frontOpacity = flipAnim.interpolate({
    inputRange: [0, 0.49, 0.5, 1],
    outputRange: [1, 1, 0, 0],
  });
  const backOpacity = flipAnim.interpolate({
    inputRange: [0, 0.49, 0.5, 1],
    outputRange: [0, 0, 1, 1],
  });
  const frontScale = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.94, 0.94],
  });
  const backScale = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.94, 0.94, 1],
  });

  // Auto-save session state
  const persistSession = useCallback((currentIdx: number, currentAnswers: Record<number, number>) => {
    saveSession({
      category,
      mode,
      questionIds: questions.map(q => q.id),
      idx: currentIdx,
      answers: currentAnswers,
      savedAt: Date.now(),
    });
  }, [category, mode, questions]);

  const handleAnswer = useCallback((choiceIdx: number) => {
    if (answered) return;
    const correct = choiceIdx === q.r;
    if (correct) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
    const newAnswers = { ...answers, [q.id]: choiceIdx };
    setAnswers(newAnswers);
    persistSession(idx, newAnswers);
  }, [answered, q.id, q.r, answers, idx, persistSession]);

  const handleNext = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const updatedAnswers = { ...answers };
    if (!answered && mode === 'quiz') {
      updatedAnswers[q.id] = -1;
    }
    if (isLast) {
      const finalAnswers = { ...updatedAnswers };
      if (!finalAnswers.hasOwnProperty(q.id) && mode === 'quiz') {
        finalAnswers[q.id] = -1;
      }
      finishQuiz(finalAnswers);
    } else {
      const nextIdx = idx + 1;
      setAnswers(updatedAnswers);
      setIdx(nextIdx);
      persistSession(nextIdx, updatedAnswers);
    }
  }, [answers, answered, q.id, isLast, mode, idx, persistSession]);

  const handlePrev = useCallback(() => {
    if (idx > 0) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      const prevIdx = idx - 1;
      setIdx(prevIdx);
      persistSession(prevIdx, answers);
    }
  }, [idx, answers, persistSession]);

  const finishQuiz = useCallback((finalAnswers: Record<number, number>) => {
    let correct = 0, incorrect = 0, skipped = 0;
    const wrongIds: number[] = [];
    questions.forEach(q => {
      const a = finalAnswers[q.id];
      if (a === undefined || a === -1) { skipped++; wrongIds.push(q.id); }
      else if (a === q.r) { correct++; }
      else { incorrect++; wrongIds.push(q.id); }
    });
    clearSession(); // remove saved session on completion
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    onComplete({ correct, incorrect, skipped, total, wrongIds });
  }, [questions, total, onComplete]);

  const handleFinish = useCallback(() => {
    const updatedAnswers = { ...answers };
    if (!answered && mode === 'quiz') updatedAnswers[q.id] = -1;
    finishQuiz(updatedAnswers);
  }, [answers, answered, q.id, mode, finishQuiz]);

  const answered_count = Object.keys(answers).length;
  const correct_so_far = Object.entries(answers).filter(([id, a]) => {
    const question = questions.find(q => q.id === parseInt(id));
    return question && a === question.r;
  }).length;

  const isCorrect = answered && chosenIdx === q.r;
  const isWrong = answered && chosenIdx !== q.r && chosenIdx !== -1;

  const s = StyleSheet.create({
    safe: { flex: 1, backgroundColor: T.bg },
    header: {
      backgroundColor: T.navy, paddingHorizontal: 20,
      paddingTop: 12, paddingBottom: 16,
    },
    hdrTop: {
      flexDirection: 'row', alignItems: 'center',
      justifyContent: 'space-between', marginBottom: 12,
    },
    backBtn: { padding: 6 },
    backText: { fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: '600' },
    badge: {
      fontSize: 10, fontWeight: '800', letterSpacing: 1.2,
      textTransform: 'uppercase', color: T.gold,
      backgroundColor: 'rgba(200,150,12,0.2)',
      paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12,
      maxWidth: 120, textAlign: 'center',
    },
    scoreChip: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12,
    },
    scoreText: { fontSize: 12, color: '#fff', fontWeight: '600' },
    progressBarBg: {
      height: 4, backgroundColor: 'rgba(255,255,255,0.12)',
      borderRadius: 2, overflow: 'hidden',
    },
    progressBarFill: {
      height: 4, backgroundColor: T.gold, borderRadius: 2,
    },
    progLabel: {
      fontSize: 11, color: 'rgba(255,255,255,0.4)',
      marginTop: 5, textAlign: 'right',
    },

    scroll: { flex: 1 },
    scrollContent: { padding: 18, paddingBottom: 24 },

    qCard: {
      backgroundColor: T.surface,
      borderRadius: 18, borderWidth: 1,
      borderColor: T.border,
      borderTopWidth: 3, borderTopColor: T.gold,
      marginBottom: 16, overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.07,
      shadowRadius: 8,
      elevation: 3,
    },
    qBody: { padding: 20 },
    qText: {
      fontSize: 17, fontWeight: '600', color: T.text,
      lineHeight: 26, marginBottom: 22,
    },

    ansBtn: {
      flexDirection: 'row', alignItems: 'flex-start',
      gap: 12, padding: 14,
      borderRadius: 12, borderWidth: 1.5, borderColor: T.border,
      backgroundColor: T.surface, marginBottom: 9,
    },
    ansBtnCorrect: { borderColor: T.okBorder, backgroundColor: T.okBg },
    ansBtnIncorrect: { borderColor: T.errBorder, backgroundColor: T.errBg },
    ansBtnReveal: { borderColor: T.okBorder, backgroundColor: T.okBg, opacity: 0.6 },
    ansKey: {
      width: 28, height: 28, borderRadius: 14,
      borderWidth: 1.5, borderColor: T.borderS,
      alignItems: 'center', justifyContent: 'center', flexShrink: 0,
    },
    ansKeyCorrect: { backgroundColor: T.ok, borderColor: T.ok },
    ansKeyIncorrect: { backgroundColor: T.err, borderColor: T.err },
    ansKeyReveal: { backgroundColor: T.ok, borderColor: T.ok },
    ansKeyText: { fontSize: 11, fontWeight: '800', color: T.text2 },
    ansKeyTextColored: { color: '#fff' },
    ansText: { fontSize: 14.5, color: T.text, lineHeight: 22, flex: 1, paddingTop: 3 },
    ansTextMuted: { opacity: 0.6 },

    expPanel: {
      marginHorizontal: 20, marginBottom: 20,
      padding: 16, borderRadius: 12,
      borderLeftWidth: 3, borderLeftColor: T.ok,
      backgroundColor: T.okBg,
    },
    expPanelWrong: { borderLeftColor: T.gold, backgroundColor: T.goldLight },
    expLabel: {
      fontSize: 10, fontWeight: '800', letterSpacing: 1.2,
      textTransform: 'uppercase', color: T.ok, marginBottom: 6,
    },
    expLabelWrong: { color: T.gold },
    expText: { fontSize: 13.5, color: T.text, lineHeight: 20 },

    // Flashcard
    flipCardOuter: { marginBottom: 16, minHeight: 200 },
    flipFace: {
      backgroundColor: T.surface, borderRadius: 18,
      borderWidth: 1, borderColor: T.border,
      borderTopWidth: 3, borderTopColor: T.gold,
      padding: 24,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.07,
      shadowRadius: 8,
      elevation: 3,
    },
    flipQ: {
      fontSize: 18, fontWeight: '600', color: T.text,
      lineHeight: 27, marginBottom: 24,
    },
    flipBtn: {
      backgroundColor: T.goldLight, borderRadius: 12,
      paddingVertical: 13, alignItems: 'center',
    },
    flipBtnText: { fontSize: 14, fontWeight: '700', color: T.gold },
    flipAnswer: {
      marginTop: 0, padding: 0,
    },
    flipALbl: {
      fontSize: 10, fontWeight: '800', letterSpacing: 1.2,
      textTransform: 'uppercase', color: T.gold, marginBottom: 8,
    },
    flipAText: {
      fontSize: 16, fontWeight: '700', color: T.text, marginBottom: 10,
    },
    flipAExp: {
      fontSize: 13.5, color: T.text2, lineHeight: 20,
      paddingTop: 10, borderTopWidth: 1, borderTopColor: T.border,
    },

    navRow: {
      flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 4,
    },
    navBtn: {
      flex: 1, paddingVertical: 14, borderRadius: 12, alignItems: 'center',
    },
    navBtnOutline: { borderWidth: 1.5, borderColor: T.border, backgroundColor: T.surface },
    navBtnPrimary: { backgroundColor: T.gold },
    navBtnDisabled: { opacity: 0.3 },
    navBtnText: { fontSize: 14, fontWeight: '700' },
    navBtnTextOutline: { color: T.text2 },
    navBtnTextPrimary: { color: '#fff' },
    navCounter: { fontSize: 12, color: T.text3, textAlign: 'center', minWidth: 60 },
  });

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar barStyle="light-content" backgroundColor={T.navy} />
      <View style={s.header}>
        <View style={s.hdrTop}>
          <TouchableOpacity style={s.backBtn} onPress={onBack}>
            <Text style={s.backText}>← Home</Text>
          </TouchableOpacity>
          <Text style={s.badge} numberOfLines={1}>{q.c}</Text>
          {mode === 'quiz' ? (
            <View style={s.scoreChip}>
              <Text style={s.scoreText}>{correct_so_far}/{answered_count}</Text>
            </View>
          ) : (
            <View style={s.scoreChip}>
              <Text style={s.scoreText}>Flashcard</Text>
            </View>
          )}
        </View>
        <View style={s.progressBarBg}>
          <Animated.View
            style={[
              s.progressBarFill,
              { width: progressAnim.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) },
            ]}
          />
        </View>
        <Text style={s.progLabel}>{idx + 1} of {total}</Text>
      </View>

      <ScrollView style={s.scroll} contentContainerStyle={s.scrollContent} showsVerticalScrollIndicator={false}>

        {/* ── QUIZ MODE ─────────────────────────────────── */}
        {mode === 'quiz' && (
          <>
            <View style={s.qCard}>
              <View style={s.qBody}>
                <Text style={s.qText}>{q.q}</Text>
                {q.a.map((choice, i) => {
                  const isChosen = answered && chosenIdx === i;
                  const isThisCorrect = i === q.r;
                  let cardStyle: object = s.ansBtn;
                  let keyStyle: object = s.ansKey;
                  let keyTextStyle: object = s.ansKeyText;
                  let textStyle: object = s.ansText;

                  if (answered) {
                    if (isThisCorrect && isChosen) {
                      cardStyle = { ...s.ansBtn, ...s.ansBtnCorrect };
                      keyStyle = { ...s.ansKey, ...s.ansKeyCorrect };
                      keyTextStyle = { ...s.ansKeyText, ...s.ansKeyTextColored };
                    } else if (isChosen && !isThisCorrect) {
                      cardStyle = { ...s.ansBtn, ...s.ansBtnIncorrect };
                      keyStyle = { ...s.ansKey, ...s.ansKeyIncorrect };
                      keyTextStyle = { ...s.ansKeyText, ...s.ansKeyTextColored };
                    } else if (isThisCorrect && !isChosen) {
                      cardStyle = { ...s.ansBtn, ...s.ansBtnReveal };
                      keyStyle = { ...s.ansKey, ...s.ansKeyReveal };
                      keyTextStyle = { ...s.ansKeyText, ...s.ansKeyTextColored };
                      textStyle = { ...s.ansText, ...s.ansTextMuted };
                    }
                  }

                  return (
                    <TouchableOpacity
                      key={i}
                      style={cardStyle}
                      onPress={() => handleAnswer(i)}
                      disabled={answered}
                      activeOpacity={0.75}
                    >
                      <View style={keyStyle}>
                        <Text style={keyTextStyle}>{LETTERS[i]}</Text>
                      </View>
                      <Text style={textStyle}>{choice}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {answered && (
              <View style={[s.expPanel, isWrong && s.expPanelWrong]}>
                <Text style={[s.expLabel, isWrong && s.expLabelWrong]}>
                  {isCorrect ? '✓ Correct' : `✗ Correct: ${LETTERS[q.r]}`}
                </Text>
                <Text style={s.expText}>{q.e}</Text>
              </View>
            )}
          </>
        )}

        {/* ── FLASHCARD MODE ────────────────────────────── */}
        {mode === 'flash' && (
          <View style={s.flipCardOuter}>
            {/* Front face */}
            <Animated.View
              style={[
                s.flipFace,
                { opacity: frontOpacity, transform: [{ scale: frontScale }] },
              ]}
            >
              <Text style={s.flipQ}>{q.q}</Text>
              <TouchableOpacity style={s.flipBtn} onPress={flipToAnswer} activeOpacity={0.8}>
                <Text style={s.flipBtnText}>Reveal Answer ↓</Text>
              </TouchableOpacity>
            </Animated.View>

            {/* Back face — shown after flip */}
            {flipped && (
              <Animated.View
                style={[
                  s.flipFace,
                  StyleSheet.absoluteFillObject,
                  { opacity: backOpacity, transform: [{ scale: backScale }] },
                ]}
              >
                <Text style={s.flipQ}>{q.q}</Text>
                <View style={s.flipAnswer}>
                  <Text style={s.flipALbl}>Correct Answer</Text>
                  <Text style={s.flipAText}>{LETTERS[q.r]}. {q.a[q.r]}</Text>
                  <Text style={s.flipAExp}>{q.e}</Text>
                </View>
              </Animated.View>
            )}
          </View>
        )}

        {/* ── Navigation ────────────────────────────────── */}
        <View style={s.navRow}>
          <TouchableOpacity
            style={[s.navBtn, s.navBtnOutline, idx === 0 && s.navBtnDisabled]}
            onPress={handlePrev}
            disabled={idx === 0}
            activeOpacity={0.75}
          >
            <Text style={[s.navBtnText, s.navBtnTextOutline]}>← Prev</Text>
          </TouchableOpacity>

          <Text style={s.navCounter}>{idx + 1} / {total}</Text>

          {isLast ? (
            <TouchableOpacity style={[s.navBtn, s.navBtnPrimary]} onPress={handleFinish} activeOpacity={0.85}>
              <Text style={[s.navBtnText, s.navBtnTextPrimary]}>Finish →</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={[s.navBtn, s.navBtnPrimary]} onPress={handleNext} activeOpacity={0.85}>
              <Text style={[s.navBtnText, s.navBtnTextPrimary]}>Next →</Text>
            </TouchableOpacity>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
