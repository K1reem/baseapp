import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Text } from "@/components/Themed";
import { ui } from "./tokens";

type Props = {
  value?: string;
  placeholder?: string;
  onChangeText?: (v: string) => void;
  disabled?: boolean;
  error?: string;
  minHeight?: number;
};

export function TextArea({
  value,
  placeholder,
  onChangeText,
  disabled = false,
  error,
  minHeight = 110,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={!disabled}
        multiline
        textAlignVertical="top"
        style={[
          styles.input,
          { minHeight },
          error && styles.errorBorder,
          disabled && styles.disabled,
        ]}
        placeholderTextColor={ui.colors.neutral.muted}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 6 },
  input: {
    borderWidth: 1,
    borderColor: ui.colors.background.border,
    borderRadius: ui.radius.md,
    paddingHorizontal: ui.spacing.md,
    paddingVertical: ui.spacing.md,
    fontSize: 15,
    backgroundColor: "white",
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

