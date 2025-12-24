export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
} as const;

export type SpacingKey = keyof typeof spacing;

export const componentSpacing = {
  screenPadding: spacing.xl,
  cardPaddingX: spacing.lg,
  cardPaddingY: spacing.lg,
  fieldGap: spacing.sm,
  formGap: spacing.md,
  buttonPaddingX: spacing.lg,
  buttonPaddingY: spacing.md,
  inputPaddingX: spacing.md,
  inputPaddingY: spacing.md,
} as const;

