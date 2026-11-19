import React, { useState, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, SafeAreaView, StatusBar, LayoutAnimation, Platform, UIManager,
} from 'react-native';
import { useTheme } from './theme';
import { STUDY_GUIDE, GuideEntry } from './studyGuide';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface AccordionCardProps {
  entry: GuideEntry;
}

function AccordionCard({ entry }: AccordionCardProps) {
  const T = useTheme();
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(prev => !prev);
  }, []);

  const s = StyleSheet.create({
    card: {
      backgroundColor: T.surface, borderRadius: 14,
      borderWidth: 1, borderColor: T.border,
      marginBottom: 10, overflow: 'hidden',
    },
    cardHeader: {
      flexDirection: 'row', alignItems: 'center',
      padding: 16, gap: 12,
    },
    icon: { fontSize: 22 },
    headerText: { flex: 1 },
    catName: { fontSize: 15, fontWeight: '700', color: T.text, marginBottom: 2 },
    summary: { fontSize: 12.5, color: T.text3, lineHeight: 18 },
    chevron: { fontSize: 14, color: T.text3, fontWeight: '700' },

    body: { paddingHorizontal: 16, paddingBottom: 16 },
    divider: { height: 1, backgroundColor: T.border, marginBottom: 14 },

    sectionHead: {
      fontSize: 10, fontWeight: '800', letterSpacing: 1.1,
      textTransform: 'uppercase', color: T.gold,
      marginBottom: 8, marginTop: 14,
    },
    bullet: {
      flexDirection: 'row', gap: 8, marginBottom: 6,
    },
    dot: { fontSize: 13, color: T.text3, marginTop: 2 },
    bulletText: { fontSize: 13.5, color: T.text, lineHeight: 20, flex: 1 },

    trapHead: {
      fontSize: 10, fontWeight: '800', letterSpacing: 1.1,
      textTransform: 'uppercase', color: T.err,
      marginBottom: 8, marginTop: 14,
    },
    trapBullet: {
      flexDirection: 'row', gap: 8, marginBottom: 6,
    },
    trapDot: { fontSize: 13, color: T.err, marginTop: 2 },
    trapText: { fontSize: 13.5, color: T.text, lineHeight: 20, flex: 1 },

    mustHead: {
      fontSize: 10, fontWeight: '800', letterSpacing: 1.1,
      textTransform: 'uppercase', color: T.ok,
      marginBottom: 8, marginTop: 14,
    },
    mustItem: {
      backgroundColor: T.okBg, borderRadius: 8,
      padding: 10, marginBottom: 6,
      borderLeftWidth: 3, borderLeftColor: T.ok,
    },
    mustText: { fontSize: 13.5, color: T.text, lineHeight: 20 },
  });

  return (
    <View style={s.card}>
      <TouchableOpacity style={s.cardHeader} onPress={toggle} activeOpacity={0.75}>
        <Text style={s.icon}>{entry.icon}</Text>
        <View style={s.headerText}>
          <Text style={s.catName}>{entry.category}</Text>
          {!expanded && (
            <Text style={s.summary} numberOfLines={2}>{entry.summary}</Text>
          )}
        </View>
        <Text style={s.chevron}>{expanded ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={s.body}>
          <View style={s.divider} />

          <Text style={s.sectionHead}>📌 Key Points</Text>
          {entry.keyPoints.map((pt, i) => (
            <View key={i} style={s.bullet}>
              <Text style={s.dot}>•</Text>
              <Text style={s.bulletText}>{pt}</Text>
            </View>
          ))}

          <Text style={s.mustHead}>✅ Must-Know Numbers & Rules</Text>
          {entry.mustKnow.map((item, i) => (
            <View key={i} style={s.mustItem}>
              <Text style={s.mustText}>{item}</Text>
            </View>
          ))}

          <Text style={s.trapHead}>⚠️ Exam Traps</Text>
          {entry.examTraps.map((trap, i) => (
            <View key={i} style={s.trapBullet}>
              <Text style={s.trapDot}>!</Text>
              <Text style={s.trapText}>{trap}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

interface Props {
  onBack: () => void;
}

export default function StudyScreen({ onBack }: Props) {
  const T = useTheme();

  const s = StyleSheet.create({
    safe: { flex: 1, backgroundColor: T.navy },
    header: {
      backgroundColor: T.navy,
      paddingHorizontal: 24, paddingTop: 14, paddingBottom: 20,
    },
    hdrRow: {
      flexDirection: 'row', alignItems: 'center',
      justifyContent: 'space-between', marginBottom: 8,
    },
    backBtn: { padding: 6 },
    backText: { fontSize: 13, color: 'rgba(255,255,255,0.6)', fontWeight: '600' },
    title: { fontSize: 24, fontWeight: '800', color: '#fff', marginBottom: 4 },
    subtitle: { fontSize: 13, color: 'rgba(255,255,255,0.5)' },

    body: { flex: 1, backgroundColor: T.bg },
    scroll: { flex: 1 },
    scrollContent: { padding: 16, paddingBottom: 40 },

    introCard: {
      backgroundColor: T.navy, borderRadius: 14,
      padding: 16, marginBottom: 16,
      borderWidth: 1, borderColor: 'rgba(200,150,12,0.3)',
    },
    introText: {
      fontSize: 13.5, color: 'rgba(255,255,255,0.75)',
      lineHeight: 20,
    },
    introHighlight: { color: T.gold, fontWeight: '700' },
  });

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar barStyle="light-content" backgroundColor={T.navy} />
      <View style={s.header}>
        <View style={s.hdrRow}>
          <TouchableOpacity style={s.backBtn} onPress={onBack}>
            <Text style={s.backText}>← Home</Text>
          </TouchableOpacity>
        </View>
        <Text style={s.title}>Study Guide</Text>
        <Text style={s.subtitle}>10 categories · Key facts, numbers & exam traps</Text>
      </View>

      <View style={s.body}>
        <ScrollView style={s.scroll} contentContainerStyle={s.scrollContent} showsVerticalScrollIndicator={false}>

          <View style={s.introCard}>
            <Text style={s.introText}>
              Tap any category to expand it. Focus on the{' '}
              <Text style={s.introHighlight}>Must-Know</Text> section before the exam, and
              review <Text style={s.introHighlight}>Exam Traps</Text> to avoid common mistakes.
            </Text>
          </View>

          {STUDY_GUIDE.map(entry => (
            <AccordionCard key={entry.category} entry={entry} />
          ))}

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
