import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, ViewStyle } from "react-native";
import { Text } from "@/components/Themed";
import { ui } from "./tokens";
import { spacing, componentSpacing } from "./spacing";
import { radius, componentRadius } from "./radius";
import { typography } from "./typography";

type ButtonVariant = "primary" | "neutral" | "danger";

type Props = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: ButtonVariant;
  style?: ViewStyle;
};

export function Button({
  label,
  onPress,
  disabled = false,
  loading = false,
  variant = "primary",
  style,
}: Props) {
  const isDisabled = disabled || loading;

  const bg =
    variant === "primary"
      ? ui.colors.primary.main
      : variant === "danger"
      ? ui.colors.danger.main
      : ui.colors.neutral.main;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.base,
        { backgroundColor: bg },
        isDisabled && styles.disabled,
        style,
      ]}
      accessibilityRole="button"
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.text}>{label}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 46,
    borderRadius: componentRadius.button,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: componentSpacing.buttonPaddingX,
    paddingVertical: componentSpacing.buttonPaddingY,
  },
  disabled: {
    opacity: 0.55,
  },
  text: {
    ...typography.button,
    color: "white",
  },
});
