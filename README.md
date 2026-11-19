# Michigan RE Exam Prep — iOS App (v1.1)

Built with Expo SDK 51 / React Native / TypeScript. Targets iOS 15+.

## What's New in v1.1 (Polished)

- **Onboarding screen** — 4-slide welcome flow shown on first launch only
- **Haptic feedback** — tap answers and nav buttons to feel tactile confirmation
- **Animated progress bar** — spring-physics bar tracks your position
- **Flashcard flip animation** — smooth reveal transition on "Reveal Answer"
- **Score persistence** — high scores saved per category via AsyncStorage
- **Stats banner** — home screen shows sessions completed and overall accuracy
- **Last category restored** — reopening the app returns you to where you left off
- **Score count-up** — results percentage animates upward on screen entry
- **New High Score badge** — 🎉 banner springs in when you beat your best

## Quick Start

```bash
npm install
npx expo start
# Press 'i' to open in iOS Simulator
```

## App Store Build via EAS

1. Install EAS CLI:
   ```bash
   npm install -g eas-cli
   eas login   # log in with your Apple ID (asilyas98@gmail.com)
   ```

2. Initialize the project:
   ```bash
   eas init    # creates your projectId — paste it into app.json > extra.eas.projectId
   ```

3. Configure signing (first time):
   ```bash
   eas credentials   # EAS manages provisioning profiles & certificates automatically
   ```

4. Build for TestFlight (preview):
   ```bash
   npm run build:preview
   ```

5. Build for App Store submission:
   ```bash
   npm run build:ios
   ```

6. Submit to App Store Connect:
   ```bash
   npm run submit:ios   # fill in ascAppId and appleTeamId in eas.json first
   ```

## Required Before Submitting

- [ ] Replace placeholder icon/splash in `assets/` (1024×1024 PNG for icon, 1242×2436 for splash)
- [ ] Fill `YOUR_EAS_PROJECT_ID` in `app.json`
- [ ] Fill `YOUR_APP_STORE_CONNECT_APP_ID` and `YOUR_APPLE_TEAM_ID` in `eas.json`
- [ ] Create the app listing in App Store Connect (appstoreconnect.apple.com)
- [ ] Add a Privacy Policy URL to the App Store listing
- [ ] Upload screenshots (required: 6.5" and 5.5" sizes minimum)

## Project Structure

```
App.tsx                   Root: onboarding check + fade transitions between screens
src/
  data.ts                73 questions + categories + helper functions
  theme.ts               Light/dark color tokens + useTheme() hook
  storage.ts             AsyncStorage helpers (high scores, stats, onboarding flag)
  OnboardingScreen.tsx   4-slide welcome flow (first launch only)
  HomeScreen.tsx         Category picker, mode toggle, stats banner, start button
  QuizScreen.tsx         Quiz + Flashcard UI — haptics, animated bar, flip animation
  ResultsScreen.tsx      Score screen — count-up, new-high-score badge, stat cards
```

## Bundle ID
`com.simpleaillc.mireaprep`
