import type { TextStyle } from "react-native";

const lh = (size: number, percent: number) => Math.round(size * (percent / 100));

export const typography: Record<string, TextStyle> = {
  // Très gros titre (rare, mais utile pour écran onboarding/login)
  display: { fontSize: 36, lineHeight: lh(36, 120), fontWeight: "800" },

  // Titres d'écran / sections
  h1: { fontSize: 28, lineHeight: lh(28, 120), fontWeight: "800" },
  h2: { fontSize: 20, lineHeight: lh(20, 130), fontWeight: "800" },
  h3: { fontSize: 16, lineHeight: lh(16, 140), fontWeight: "700" },

  // Textes
  body: { fontSize: 14, lineHeight: lh(14, 150), fontWeight: "400" },
  bodySm: { fontSize: 12, lineHeight: lh(12, 150), fontWeight: "400" },
  caption: { fontSize: 10, lineHeight: lh(10, 150), fontWeight: "400" },

  // UI
  label: { fontSize: 14, lineHeight: 20, fontWeight: "700" },
  button: { fontSize: 16, lineHeight: lh(16, 150), fontWeight: "800" },
  link: { fontSize: 14, lineHeight: 20, fontWeight: "800" },
} as const;

export type TypographyKey = keyof typeof typography;

