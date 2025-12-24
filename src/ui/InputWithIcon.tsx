import React from "react";
import { Pressable, StyleSheet, TextInput, View, ViewStyle } from "react-native";
import { Text } from "@/components/Themed";
import { ui } from "./tokens";

type Props = {
  value?: string;
  placeholder?: string;
  onChangeText?: (v: string) => void;
  disabled?: boolean;
  error?: string;

  rightText?: string;            // ex: "Oeil"
  onRightPress?: () => void;     // toggle show/hide
  rightStyle?: ViewStyle;
};

export function InputWithIcon({
  value,
  placeholder,
  onChangeText,
  disabled = false,
  error,
  rightText,
  onRightPress,
  rightStyle,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.row, error && styles.errorBorder, disabled && styles.disabled]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          editable={!disabled}
          style={styles.input}
          placeholderTextColor={ui.colors.neutral.muted}
        />

        {rightText ? (
          <Pressable
            onPress={onRightPress}
            disabled={!onRightPress || disabled}
            style={[styles.rightPill, rightStyle]}
            accessibilityRole="button"
          >
            <Text style={styles.rightText}>{rightText}</Text>
          </Pressable>
        ) : null}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 6 },
  row: {
    minHeight: 46,
    borderRadius: ui.radius.md,
    borderWidth: 1,
    borderColor: ui.colors.background.border,
    paddingLeft: ui.spacing.md,
    paddingRight: ui.spacing.sm,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 12,
    paddingRight: 10,
  },
  rightPill: {
    borderRadius: ui.radius.sm,
    borderWidth: 1,
    borderColor: ui.colors.background.border,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  rightText: {
    fontSize: 12,
    fontWeight: "800",
    color: ui.colors.neutral.main,
  },
  disabled: {
    backgroundColor: ui.colors.background.secondary,
    opacity: 0.75,
  },
  errorBorder: {
    borderColor: ui.colors.danger.main,
  },
  errorText: {
    fontSize: 12,
    fontWeight: "700",
    color: ui.colors.danger.main,
  },
});

