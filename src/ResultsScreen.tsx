import React, { useEffect, useRef, useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, SafeAreaView, StatusBar, Animated,
} from 'react-native';
import { useTheme } from './theme';
import { saveHighScore, updateStats } from './storage';

export interface QuizResults {
  correct: number;
  incorrect: number;
  skipped: number;
  total: number;
  wrongIds: number[];
}

interface Props {
  results: QuizResults;
  category: string;
  onRetryWrong: () => void;
  onRestart: () => void;
  onHome: () => void;
}

export default function ResultsScreen({ results, category, onRetryWrong, onRestart, onHome }: Props) {
  const T = useTheme();
  const pct = results.total > 0 ? Math.round((results.correct / results.total) * 100) : 0;

  const [displayPct, setDisplayPct] = useState(0);
  const [isNewHigh, setIsNewHigh] = useState(false);
  const heroScale = useRef(new Animated.Value(0.85)).current;
  const heroOpacity = useRef(new Animated.Value(0)).current;
  const badgeScale = useRef(new Animated.Value(0)).current;

  let grade = '', emoji = '', sub = '';
  if (pct >= 90) { grade = 'Outstanding'; emoji = '🏆'; sub = "Excellent mastery. You're exam ready."; }
  else if (pct >= 75) { grade = 'Strong Pass'; emoji = '✅'; sub = 'Solid foundation — review what you missed.'; }
  else if (pct >= 60) { grade = 'Good Progress'; emoji = '📈'; sub = 'Keep going. Focus on your weakest topics.'; }
  else { grade = 'Keep Practicing'; emoji = '📚'; sub = 'Review the material and try again.'; }

  useEffect(() => {
    // Save stats + check high score
    updateStats(results.correct, results.total);
    saveHighScore(category, pct).then(newHigh => {
      if (newHigh) {
        setIsNewHigh(true);
        setTimeout(() => {
          Animated.spring(badgeScale, { toValue: 1, friction: 5, tension: 80, useNativeDriver: true }).start();
        }, 600);
      }
    });

    // Hero entrance animation
    Animated.parallel([
      Animated.spring(heroScale, { toValue: 1, friction: 7, tension: 50, useNativeDriver: true }),
      Animated.timing(heroOpacity, { toValue: 1, duration: 350, useNativeDriver: true }),
    ]).start();

    // Percentage count-up
    const duration = 900;
    const steps = 36;
    const stepMs = duration / steps;
    const inc = pct / steps;
    let cur = 0;
    const timer = setInterval(() => {
      cur += inc;
      if (cur >= pct) { setDisplayPct(pct); clearInterval(timer); }
      else { setDisplayPct(Math.round(cur)); }
    }, stepMs);
    return () => clearInterval(timer);
  }, [pct, category]);

  const pctColor = pct >= 75 ? T.ok : pct >= 60 ? T.gold : T.err;

  const s = StyleSheet.create({
    safe: { flex: 1, backgroundColor: T.bg },
    scroll: { flex: 1 },
    scrollContent: { padding: 24, paddingBottom: 48 },

    hero: {
      backgroundColor: T.navy,
      borderRadius: 20, padding: 32,
      alignItems: 'center', marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 12,
      elevation: 6,
    },
    emoji: { fontSize: 52, marginBottom: 12 },
    pct: {
      fontSize: 72, fontWeight: '800',
      color: pctColor,
      lineHeight: 76, marginBottom: 4,
    },
    gradeName: { fontSize: 20, fontWeight: '700', color: '#fff', marginBottom: 6 },
    sub: { fontSize: 13.5, color: 'rgba(255,255,255,0.55)', textAlign: 'center' },
    catLabel: {
      fontSize: 11, fontWeight: '700', letterSpacing: 1.3,
      textTransform: 'uppercase', color: T.gold, marginTop: 14,
    },

    newHighBadge: {
      marginTop: 14, paddingHorizontal: 16, paddingVertical: 7,
      backgroundColor: T.gold, borderRadius: 20,
    },
    newHighText: { fontSize: 12, fontWeight: '800', color: '#fff', letterSpacing: 0.5 },

    statsRow: { flexDirection: 'row', gap: 12, marginBottom: 20 },
    statCard: {
      flex: 1, backgroundColor: T.surface,
      borderRadius: 14, padding: 16, alignItems: 'center',
      borderWidth: 1, borderColor: T.border,
      shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05, shadowRadius: 4, elevation: 2,
    },
    statNum: { fontSize: 34, fontWeight: '800', marginBottom: 2 },
    statLbl: {
      fontSize: 11, fontWeight: '700', letterSpacing: 0.9,
      textTransform: 'uppercase', color: T.text3,
    },

    btn: { borderRadius: 13, paddingVertical: 16, alignItems: 'center', marginBottom: 10 },
    btnPrimary: { backgroundColor: T.gold },
    btnOutline: { backgroundColor: T.surface, borderWidth: 1.5, borderColor: T.border },
    btnGhost: { backgroundColor: 'transparent' },
    btnText: { fontSize: 15, fontWeight: '700' },
    btnTextPrimary: { color: '#fff' },
    btnTextOutline: { color: T.text2 },
    btnTextGhost: { color: T.text3 },
  });

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar barStyle={T.statusBar} />
      <ScrollView style={s.scroll} contentContainerStyle={s.scrollContent} showsVerticalScrollIndicator={false}>

        <Animated.View style={[s.hero, { opacity: heroOpacity, transform: [{ scale: heroScale }] }]}>
          <Text style={s.emoji}>{emoji}</Text>
          <Text style={s.pct}>{displayPct}%</Text>
          <Text style={s.gradeName}>{grade}</Text>
          <Text style={s.sub}>{sub}</Text>
          <Text style={s.catLabel}>{category}</Text>

          {isNewHigh && (
            <Animated.View style={[s.newHighBadge, { transform: [{ scale: badgeScale }] }]}>
              <Text style={s.newHighText}>🎉 NEW HIGH SCORE</Text>
            </Animated.View>
          )}
        </Animated.View>

        <View style={s.statsRow}>
          <View style={s.statCard}>
            <Text style={[s.statNum, { color: T.ok }]}>{results.correct}</Text>
            <Text style={s.statLbl}>Correct</Text>
          </View>
          <View style={s.statCard}>
            <Text style={[s.statNum, { color: T.err }]}>{results.incorrect}</Text>
            <Text style={s.statLbl}>Incorrect</Text>
          </View>
          <View style={s.statCard}>
            <Text style={[s.statNum, { color: T.text3 }]}>{results.skipped}</Text>
            <Text style={s.statLbl}>Skipped</Text>
          </View>
        </View>

        {results.wrongIds.length > 0 && (
          <TouchableOpacity style={[s.btn, s.btnPrimary]} onPress={onRetryWrong} activeOpacity={0.85}>
            <Text style={[s.btnText, s.btnTextPrimary]}>
              Retry Missed Questions ({results.wrongIds.length})
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={[s.btn, s.btnOutline]} onPress={onRestart} activeOpacity={0.8}>
          <Text style={[s.btnText, s.btnTextOutline]}>Start Over</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[s.btn, s.btnGhost]} onPress={onHome} activeOpacity={0.7}>
          <Text style={[s.btnText, s.btnTextGhost]}>← Back to Home</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}
