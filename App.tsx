import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import OnboardingScreen from './src/OnboardingScreen';
import HomeScreen from './src/HomeScreen';
import QuizScreen from './src/QuizScreen';
import ResultsScreen, { QuizResults } from './src/ResultsScreen';
import StudyScreen from './src/StudyScreen';
import { QUESTIONS, getFilteredQuestions, shuffle, Question } from './src/data';
import { hasOnboarded, markOnboarded, loadSession, clearSession, SavedSession } from './src/storage';
import { useTheme } from './src/theme';

type Screen = 'loading' | 'onboarding' | 'home' | 'quiz' | 'results' | 'study';

interface QuizState {
  category: string;
  mode: 'quiz' | 'flash';
  questions: Question[];
}

export default function App() {
  const T = useTheme();
  const [screen, setScreen] = useState<Screen>('loading');
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [results, setResults] = useState<QuizResults | null>(null);

  // Fade transition
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const transitionTo = useCallback((nextScreen: Screen, fn?: () => void) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 140,
      useNativeDriver: true,
    }).start(() => {
      fn?.();
      setScreen(nextScreen);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 220,
        useNativeDriver: true,
      }).start();
    });
  }, [fadeAnim]);

  // Check onboarding on first mount
  useEffect(() => {
    hasOnboarded().then(done => {
      setScreen(done ? 'home' : 'onboarding');
    });
  }, []);

  const handleOnboardingDone = useCallback(() => {
    markOnboarded();
    transitionTo('home');
  }, [transitionTo]);

  const handleStart = useCallback((category: string, mode: 'quiz' | 'flash', shuffled: boolean) => {
    clearSession(); // discard any saved session when starting fresh
    transitionTo('quiz', () => {
      let qs = getFilteredQuestions(category);
      if (shuffled) qs = shuffle(qs);
      setQuizState({ category, mode, questions: qs });
      setResults(null);
    });
  }, [transitionTo]);

  const handleResume = useCallback((session: SavedSession) => {
    transitionTo('quiz', () => {
      const qs = session.questionIds
        .map(id => QUESTIONS.find(q => q.id === id))
        .filter(Boolean) as Question[];
      setQuizState({ category: session.category, mode: session.mode, questions: qs });
      setResults(null);
    });
  }, [transitionTo]);

  const handleStudy = useCallback(() => {
    transitionTo('study');
  }, [transitionTo]);

  const handleComplete = useCallback((r: QuizResults) => {
    transitionTo('results', () => setResults(r));
  }, [transitionTo]);

  const handleRetryWrong = useCallback(() => {
    if (!quizState || !results) return;
    transitionTo('quiz', () => {
      const wrongQs = QUESTIONS.filter(q => results.wrongIds.includes(q.id));
      setQuizState(prev => prev ? { ...prev, questions: wrongQs } : null);
      setResults(null);
    });
  }, [quizState, results, transitionTo]);

  const handleRestart = useCallback(() => {
    if (!quizState) return;
    transitionTo('quiz', () => {
      const qs = getFilteredQuestions(quizState.category);
      setQuizState(prev => prev ? { ...prev, questions: qs } : null);
      setResults(null);
    });
  }, [quizState, transitionTo]);

  const handleHome = useCallback(() => {
    transitionTo('home', () => {
      setQuizState(null);
      setResults(null);
    });
  }, [transitionTo]);

  const renderScreen = () => {
    if (screen === 'loading') return null;

    if (screen === 'onboarding') {
      return <OnboardingScreen onDone={handleOnboardingDone} />;
    }

    if (screen === 'quiz' && quizState) {
      return (
        <QuizScreen
          questions={quizState.questions}
          mode={quizState.mode}
          category={quizState.category}
          onComplete={handleComplete}
          onBack={handleHome}
        />
      );
    }

    if (screen === 'results' && results && quizState) {
      return (
        <ResultsScreen
          results={results}
          category={quizState.category}
          onRetryWrong={handleRetryWrong}
          onRestart={handleRestart}
          onHome={handleHome}
        />
      );
    }

    if (screen === 'study') {
      return <StudyScreen onBack={handleHome} />;
    }

    return <HomeScreen onStart={handleStart} onResume={handleResume} onStudy={handleStudy} />;
  };

  return (
    <Animated.View style={[styles.root, { opacity: fadeAnim, backgroundColor: T.bg }]}>
      {renderScreen()}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
});
