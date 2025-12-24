import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, ViewStyle } from "react-native";
import { Text } from "@/components/Themed";
import { ui } from "./tokens";

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
    borderRadius: ui.radius.md,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: ui.spacing.lg,
  },
  disabled: {
    opacity: 0.55,
  },
  text: {
    fontSize: 16,
    fontWeight: "800",
    color: "white",
  },
});

