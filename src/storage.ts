import AsyncStorage from '@react-native-async-storage/async-storage';

const K = {
  ONBOARDED:    'v1:hasOnboarded',
  HIGH_SCORES:  'v1:highScores',
  LAST_CAT:     'v1:lastCategory',
  STATS:        'v1:stats',
  SESSION:      'v1:savedSession',
};

// ── Onboarding ────────────────────────────────────────────────

export async function hasOnboarded(): Promise<boolean> {
  try {
    const v = await AsyncStorage.getItem(K.ONBOARDED);
    return v === 'true';
  } catch { return false; }
}

export async function markOnboarded(): Promise<void> {
  try { await AsyncStorage.setItem(K.ONBOARDED, 'true'); } catch {}
}

// ── High Scores (best % per category) ────────────────────────

export async function getHighScores(): Promise<Record<string, number>> {
  try {
    const raw = await AsyncStorage.getItem(K.HIGH_SCORES);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

export async function saveHighScore(category: string, pct: number): Promise<boolean> {
  try {
    const scores = await getHighScores();
    const prev = scores[category] ?? 0;
    if (pct > prev) {
      scores[category] = pct;
      await AsyncStorage.setItem(K.HIGH_SCORES, JSON.stringify(scores));
      return true; // new high score
    }
    return false;
  } catch { return false; }
}

// ── Last category ─────────────────────────────────────────────

export async function getLastCategory(): Promise<string> {
  try {
    return (await AsyncStorage.getItem(K.LAST_CAT)) ?? 'All';
  } catch { return 'All'; }
}

export async function saveLastCategory(cat: string): Promise<void> {
  try { await AsyncStorage.setItem(K.LAST_CAT, cat); } catch {}
}

// ── Global stats ──────────────────────────────────────────────

export interface Stats {
  sessionsCompleted: number;
  totalAttempted: number;
  totalCorrect: number;
}

export async function getStats(): Promise<Stats> {
  try {
    const raw = await AsyncStorage.getItem(K.STATS);
    return raw ? JSON.parse(raw) : { sessionsCompleted: 0, totalAttempted: 0, totalCorrect: 0 };
  } catch { return { sessionsCompleted: 0, totalAttempted: 0, totalCorrect: 0 }; }
}

export async function updateStats(correct: number, attempted: number): Promise<void> {
  try {
    const s = await getStats();
    s.sessionsCompleted += 1;
    s.totalCorrect += correct;
    s.totalAttempted += attempted;
    await AsyncStorage.setItem(K.STATS, JSON.stringify(s));
  } catch {}
}

// ── Saved quiz session (progress persistence) ─────────────────

export interface SavedSession {
  category: string;
  mode: 'quiz' | 'flash';
  questionIds: number[];
  idx: number;
  answers: Record<number, number>; // questionId → chosen answer index
  savedAt: number; // Unix timestamp ms
}

export async function saveSession(session: SavedSession): Promise<void> {
  try {
    await AsyncStorage.setItem(K.SESSION, JSON.stringify(session));
  } catch {}
}

export async function loadSession(): Promise<SavedSession | null> {
  try {
    const raw = await AsyncStorage.getItem(K.SESSION);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export async function clearSession(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K.SESSION);
  } catch {}
}
