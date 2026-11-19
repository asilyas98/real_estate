import { useColorScheme } from 'react-native';

export const LIGHT = {
  bg:           '#F0EDE6',
  surface:      '#FFFFFF',
  surface2:     '#F7F5F1',
  surfaceH:     '#EDEAE3',
  navy:         '#1E3A5F',
  gold:         '#C8960C',
  goldH:        '#A67A08',
  goldLight:    '#FDF5DF',
  text:         '#1A1714',
  text2:        '#64605A',
  text3:        '#9E9890',
  border:       '#DDD8CE',
  borderS:      '#C8C0B4',
  ok:           '#1A6B40',
  okBg:         '#E8F5EE',
  okBorder:     '#A8D8BC',
  err:          '#B83028',
  errBg:        '#FCEEED',
  errBorder:    '#F2B8B4',
  white:        '#FFFFFF',
  statusBar:    'dark-content' as const,
};

export const DARK = {
  bg:           '#0D1720',
  surface:      '#152030',
  surface2:     '#1C2B3C',
  surfaceH:     '#213344',
  navy:         '#0D1720',
  gold:         '#D4A820',
  goldH:        '#EAC030',
  goldLight:    'rgba(212,168,32,0.14)',
  text:         '#EDE8DC',
  text2:        '#8E9BAA',
  text3:        '#5A6A7A',
  border:       '#213040',
  borderS:      '#2C3F52',
  ok:           '#4CAF82',
  okBg:         '#091E13',
  okBorder:     '#164D30',
  err:          '#E05252',
  errBg:        '#200C0C',
  errBorder:    '#5C1E1E',
  white:        '#FFFFFF',
  statusBar:    'light-content' as const,
};

export type Theme = typeof LIGHT;

export function useTheme(): Theme {
  const scheme = useColorScheme();
  return scheme === 'dark' ? DARK : LIGHT;
}
