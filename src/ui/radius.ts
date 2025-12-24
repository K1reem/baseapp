export const radius = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,

  // full pill / circle
  full: 999,
} as const;

export type RadiusKey = keyof typeof radius;

export const componentRadius = {
  card: radius.xl,
  input: radius.md,
  button: radius.md,
  pill: radius.full,
} as const;

