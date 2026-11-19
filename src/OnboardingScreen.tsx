import React, { useRef, useState } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, SafeAreaView, StatusBar, Dimensions, Animated,
} from 'react-native';
import { useTheme } from './theme';

const { width: SW } = Dimensions.get('window');

interface Props {
  onDone: () => void;
}

const SLIDES = [
  {
    emoji: '🏛️',
    title: 'Michigan RE\nExam Prep',
    body: 'Master the Michigan real estate licensing exam with 73 expert-crafted questions covering every tested topic.',
    accent: true,
  },
  {
    emoji: '📝',
    title: 'Quiz Mode',
    body: 'Answer multiple-choice questions and get instant feedback with color-coded results and clear explanations.',
    accent: false,
  },
  {
    emoji: '🃏',
    title: 'Flashcard Mode',
    body: 'Flip through concepts at your own pace. Tap to reveal the answer and explanation. Perfect for quick review.',
    accent: false,
  },
  {
    emoji: '📊',
    title: 'Track Your\nProgress',
    body: 'Your scores are saved automatically. Retry missed questions, beat your high scores, and see your mastery grow.',
    accent: false,
  },
];

export default function OnboardingScreen({ onDone }: Props) {
  const T = useTheme();
  const [slide, setSlide] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const isLast = slide === SLIDES.length - 1;

  const goTo = (idx: number) => {
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0.6, duration: 80, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start();
    setSlide(idx);
    scrollRef.current?.scrollTo({ x: idx * SW, animated: true });
  };

  const handleNext = () => {
    if (isLast) { onDone(); return; }
    goTo(slide + 1);
  };

  const s = StyleSheet.create({
    safe: { flex: 1, backgroundColor: T.navy },
    inner: { flex: 1 },

    slideWrap: {
      width: SW, flex: 1,
      paddingHorizontal: 32,
      alignItems: 'center', justifyContent: 'center',
    },
    emojiWrap: {
      width: 120, height: 120, borderRadius: 36,
      backgroundColor: 'rgba(200,150,12,0.18)',
      alignItems: 'center', justifyContent: 'center',
      marginBottom: 36,
      // subtle gold ring
      borderWidth: 1.5,
      borderColor: 'rgba(200,150,12,0.35)',
    },
    emojiText: { fontSize: 56 },
    titleText: {
      fontSize: 32, fontWeight: '800', color: '#FFFFFF',
      textAlign: 'center', lineHeight: 40, marginBottom: 16,
    },
    bodyText: {
      fontSize: 16, color: 'rgba(255,255,255,0.65)',
      textAlign: 'center', lineHeight: 24,
    },

    footer: {
      paddingHorizontal: 24, paddingBottom: 40, paddingTop: 16,
      alignItems: 'center',
    },
    dots: { flexDirection: 'row', gap: 8, marginBottom: 24 },
    dot: {
      height: 6, borderRadius: 3,
      backgroundColor: 'rgba(255,255,255,0.25)',
    },
    dotActive: { backgroundColor: T.gold },

    nextBtn: {
      width: '100%', paddingVertical: 17, borderRadius: 16,
      backgroundColor: T.gold, alignItems: 'center',
    },
    nextBtnText: { fontSize: 16, fontWeight: '800', color: '#fff' },

    skipBtn: { marginTop: 14, padding: 8 },
    skipText: {
      fontSize: 14, color: 'rgba(255,255,255,0.4)', fontWeight: '600',
    },
  });

  const cur = SLIDES[slide];

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar barStyle="light-content" />
      <View style={s.inner}>
        {/* Slide content */}
        <Animated.View style={[s.slideWrap, { opacity: fadeAnim }]}>
          <View style={s.emojiWrap}>
            <Text style={s.emojiText}>{cur.emoji}</Text>
          </View>
          <Text style={s.titleText}>{cur.title}</Text>
          <Text style={s.bodyText}>{cur.body}</Text>
        </Animated.View>

        {/* Footer */}
        <View style={s.footer}>
          {/* Dot indicators */}
          <View style={s.dots}>
            {SLIDES.map((_, i) => (
              <TouchableOpacity key={i} onPress={() => goTo(i)} activeOpacity={0.7}>
                <View
                  style={[
                    s.dot,
                    i === slide ? [s.dotActive, { width: 22 }] : { width: 6 },
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* CTA button */}
          <TouchableOpacity style={s.nextBtn} onPress={handleNext} activeOpacity={0.85}>
            <Text style={s.nextBtnText}>
              {isLast ? 'Get Started →' : 'Next'}
            </Text>
          </TouchableOpacity>

          {/* Skip (hidden on last slide) */}
          {!isLast && (
            <TouchableOpacity style={s.skipBtn} onPress={onDone} activeOpacity={0.7}>
              <Text style={s.skipText}>Skip</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}
