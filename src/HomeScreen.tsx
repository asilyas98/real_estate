import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, SafeAreaView, StatusBar,
} from 'react-native';
import { useTheme } from './theme';
import { CATEGORIES, getFilteredQuestions } from './data';
import { getLastCategory, saveLastCategory, getStats, getHighScores, Stats, loadSession, SavedSession } from './storage';

interface Props {
  onStart: (category: string, mode: 'quiz' | 'flash', shuffled: boolean) => void;
  onResume: (session: SavedSession) => void;
  onStudy: () => void;
}

export default function HomeScreen({ onStart, onResume, onStudy }: Props) {
  const T = useTheme();
  const [selectedCat, setSelectedCat] = useState('All');
  const [mode, setMode] = useState<'quiz' | 'flash'>('quiz');
  const [shuffled, setShuffled] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const [highScores, setHighScores] = useState<Record<string, number>>({});
  const [savedSession, setSavedSession] = useState<SavedSession | null>(null);

  // Restore last category + load stats + check for saved session
  useEffect(() => {
    getLastCategory().then(cat => setSelectedCat(cat));
    getStats().then(s => setStats(s));
    getHighScores().then(hs => setHighScores(hs));
    loadSession().then(sess => setSavedSession(sess));
  }, []);

  const handleCatSelect = useCallback((cat: string) => {
    setSelectedCat(cat);
    saveLastCategory(cat);
  }, []);

  const displayCats = CATEGORIES.filter(c => c !== 'All');
  const count = getFilteredQuestions(selectedCat).length;
  const bestPct = highScores[selectedCat];
  const accuracy = stats && stats.totalAttempted > 0
    ? Math.round((stats.totalCorrect / stats.totalAttempted) * 100) : null;

  const s = StyleSheet.create({
    safe: { flex: 1, backgroundColor: T.navy },
    header: {
      backgroundColor: T.navy,
      paddingHorizontal: 24,
      paddingTop: 16,
      paddingBottom: 28,
    },
    eyebrow: {
      fontSize: 11, fontWeight: '700', letterSpacing: 1.5,
      textTransform: 'uppercase', color: T.gold, marginBottom: 6,
    },
    title: {
      fontSize: 28, fontWeight: '800', color: '#FFFFFF',
      lineHeight: 34, marginBottom: 4,
    },
    subtitle: { fontSize: 13, color: 'rgba(255,255,255,0.5)' },

    statsRow: {
      flexDirection: 'row', gap: 10, marginTop: 16,
    },
    statPill: {
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: 10, paddingHorizontal: 12, paddingVertical: 7,
      flexDirection: 'row', alignItems: 'center', gap: 5,
    },
    statPillText: { fontSize: 12, color: 'rgba(255,255,255,0.75)', fontWeight: '600' },
    statPillVal: { color: T.gold, fontWeight: '800' },

    body: { flex: 1, backgroundColor: T.bg },
    scroll: { flex: 1 },
    scrollContent: { padding: 20, paddingBottom: 40 },

    sectionLabel: {
      fontSize: 11, fontWeight: '700', letterSpacing: 1.2,
      textTransform: 'uppercase', color: T.text3,
      marginBottom: 10, marginTop: 20,
    },

    catGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
    catPill: {
      paddingHorizontal: 14, paddingVertical: 8,
      borderRadius: 20, borderWidth: 1.5,
      borderColor: T.border, backgroundColor: T.surface,
    },
    catPillActive: { borderColor: T.gold, backgroundColor: T.goldLight },
    catPillText: { fontSize: 12.5, fontWeight: '600', color: T.text2 },
    catPillTextActive: { color: T.gold },

    selectedInfo: {
      flexDirection: 'row', alignItems: 'center', gap: 8,
      marginTop: 10,
    },
    countBadge: {
      backgroundColor: T.goldLight, borderRadius: 10,
      paddingHorizontal: 10, paddingVertical: 4,
    },
    countText: { fontSize: 12, color: T.gold, fontWeight: '600' },
    bestBadge: {
      backgroundColor: T.surface, borderRadius: 10,
      paddingHorizontal: 10, paddingVertical: 4,
      borderWidth: 1, borderColor: T.border,
    },
    bestText: { fontSize: 12, color: T.text3, fontWeight: '600' },
    bestVal: { color: T.ok, fontWeight: '800' },

    modeRow: { flexDirection: 'row', gap: 10 },
    modePill: {
      flex: 1, paddingVertical: 13, borderRadius: 12,
      borderWidth: 1.5, borderColor: T.border,
      backgroundColor: T.surface, alignItems: 'center',
    },
    modePillActive: { borderColor: T.gold, backgroundColor: T.gold },
    modePillText: { fontSize: 14, fontWeight: '700', color: T.text2 },
    modePillTextActive: { color: '#FFFFFF' },

    optionRow: {
      flexDirection: 'row', alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 14, paddingHorizontal: 16,
      backgroundColor: T.surface, borderRadius: 10,
      borderWidth: 1, borderColor: T.border,
    },
    optionLabel: { fontSize: 14, fontWeight: '500', color: T.text },
    toggle: {
      width: 44, height: 26, borderRadius: 13,
      backgroundColor: T.border, justifyContent: 'center',
      paddingHorizontal: 3,
    },
    toggleOn: { backgroundColor: T.gold },
    toggleThumb: {
      width: 20, height: 20, borderRadius: 10, backgroundColor: '#fff',
    },
    toggleThumbOn: { alignSelf: 'flex-end' },

    startBtn: {
      backgroundColor: T.gold, borderRadius: 14,
      paddingVertical: 18, alignItems: 'center', marginTop: 28,
      shadowColor: T.gold, shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4, shadowRadius: 12,
      elevation: 6,
    },
    startBtnText: { fontSize: 16, fontWeight: '800', color: '#fff' },
    startBtnSub: { fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 3 },

    resumeCard: {
      backgroundColor: T.navy, borderRadius: 14,
      padding: 16, marginBottom: 20,
      flexDirection: 'row', alignItems: 'center', gap: 14,
      borderWidth: 1, borderColor: 'rgba(200,150,12,0.4)',
    },
    resumeIcon: { fontSize: 28 },
    resumeInfo: { flex: 1 },
    resumeTitle: { fontSize: 15, fontWeight: '700', color: '#fff', marginBottom: 2 },
    resumeSub: { fontSize: 12, color: 'rgba(255,255,255,0.55)' },
    resumeBtn: {
      backgroundColor: T.gold, borderRadius: 10,
      paddingHorizontal: 14, paddingVertical: 8,
    },
    resumeBtnText: { fontSize: 13, fontWeight: '800', color: '#fff' },

    studyBtn: {
      flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
      gap: 8, marginTop: 14,
      paddingVertical: 14, borderRadius: 12,
      borderWidth: 1.5, borderColor: T.border,
      backgroundColor: T.surface,
    },
    studyBtnText: { fontSize: 14, fontWeight: '700', color: T.text2 },
  });

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar barStyle="light-content" backgroundColor={T.navy} />
      <View style={s.header}>
        <Text style={s.eyebrow}>Michigan Real Estate</Text>
        <Text style={s.title}>Exam Prep</Text>
        <Text style={s.subtitle}>115 practice questions · 10 exam topics</Text>

        {/* Stats row */}
        {stats && stats.sessionsCompleted > 0 && (
          <View style={s.statsRow}>
            <View style={s.statPill}>
              <Text style={s.statPillText}>
                Sessions: <Text style={s.statPillVal}>{stats.sessionsCompleted}</Text>
              </Text>
            </View>
            {accuracy !== null && (
              <View style={s.statPill}>
                <Text style={s.statPillText}>
                  Accuracy: <Text style={s.statPillVal}>{accuracy}%</Text>
                </Text>
              </View>
            )}
          </View>
        )}
      </View>

      <View style={s.body}>
        <ScrollView style={s.scroll} contentContainerStyle={s.scrollContent} showsVerticalScrollIndicator={false}>

          {/* Resume card */}
          {savedSession && (
            <View style={s.resumeCard}>
              <Text style={s.resumeIcon}>
                {savedSession.mode === 'quiz' ? '📝' : '🃏'}
              </Text>
              <View style={s.resumeInfo}>
                <Text style={s.resumeTitle}>Continue where you left off</Text>
                <Text style={s.resumeSub}>
                  {savedSession.category} · {savedSession.mode} · Q{savedSession.idx + 1}/{savedSession.questionIds.length}
                </Text>
              </View>
              <TouchableOpacity style={s.resumeBtn} onPress={() => onResume(savedSession)} activeOpacity={0.8}>
                <Text style={s.resumeBtnText}>Resume</Text>
              </TouchableOpacity>
            </View>
          )}

          {/* Category selection */}
          <Text style={s.sectionLabel}>Topic Category</Text>
          <View style={s.catGrid}>
            <TouchableOpacity
              style={[s.catPill, selectedCat === 'All' && s.catPillActive]}
              onPress={() => handleCatSelect('All')}
              activeOpacity={0.7}
            >
              <Text style={[s.catPillText, selectedCat === 'All' && s.catPillTextActive]}>All Topics</Text>
            </TouchableOpacity>
            {displayCats.map(cat => (
              <TouchableOpacity
                key={cat}
                style={[s.catPill, selectedCat === cat && s.catPillActive]}
                onPress={() => handleCatSelect(cat)}
                activeOpacity={0.7}
              >
                <Text style={[s.catPillText, selectedCat === cat && s.catPillTextActive]}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={s.selectedInfo}>
            <View style={s.countBadge}>
              <Text style={s.countText}>{count} question{count !== 1 ? 's' : ''}</Text>
            </View>
            {bestPct !== undefined && (
              <View style={s.bestBadge}>
                <Text style={s.bestText}>
                  Best: <Text style={s.bestVal}>{bestPct}%</Text>
                </Text>
              </View>
            )}
          </View>

          {/* Mode */}
          <Text style={s.sectionLabel}>Study Mode</Text>
          <View style={s.modeRow}>
            {(['quiz', 'flash'] as const).map(m => (
              <TouchableOpacity
                key={m}
                style={[s.modePill, mode === m && s.modePillActive]}
                onPress={() => setMode(m)}
                activeOpacity={0.7}
              >
                <Text style={[s.modePillText, mode === m && s.modePillTextActive]}>
                  {m === 'quiz' ? '📝  Quiz' : '🃏  Flashcard'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Shuffle toggle */}
          <Text style={[s.sectionLabel, { marginTop: 20 }]}>Options</Text>
          <TouchableOpacity style={s.optionRow} onPress={() => setShuffled(!shuffled)} activeOpacity={0.8}>
            <Text style={s.optionLabel}>Shuffle Questions</Text>
            <View style={[s.toggle, shuffled && s.toggleOn]}>
              <View style={[s.toggleThumb, shuffled && s.toggleThumbOn]} />
            </View>
          </TouchableOpacity>

          {/* Start */}
          <TouchableOpacity
            style={s.startBtn}
            onPress={() => onStart(selectedCat, mode, shuffled)}
            activeOpacity={0.85}
          >
            <Text style={s.startBtnText}>Start {mode === 'quiz' ? 'Quiz' : 'Flashcards'}</Text>
            <Text style={s.startBtnSub}>{count} questions · {selectedCat}</Text>
          </TouchableOpacity>

          {/* Study Guide */}
          <TouchableOpacity style={s.studyBtn} onPress={onStudy} activeOpacity={0.8}>
            <Text style={{ fontSize: 16 }}>📖</Text>
            <Text style={s.studyBtnText}>Study Guide — Key Facts & Exam Tips</Text>
          </TouchableOpacity>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
