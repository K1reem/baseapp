import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Text } from "@/components/Themed";
import { ui } from "./tokens";
import { componentSpacing } from "./spacing";
import { componentRadius } from "./radius";
import { typography } from "./typography";

type Props = {
  value?: string;
  placeholder?: string;
  onChangeText?: (v: string) => void;
  disabled?: boolean;
  error?: string;
};

export function Input({
  value,
  placeholder,
  onChangeText,
  disabled = false,
  error,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={!disabled}
        style={[
          styles.input,
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
  wrapper: { gap: componentSpacing.fieldGap },
  input: {
    minHeight: 46,
    borderRadius: componentRadius.input,
    borderWidth: 1,
    borderColor: ui.colors.background.border,
    paddingHorizontal: componentSpacing.inputPaddingX,
    paddingVertical: componentSpacing.inputPaddingY,
    backgroundColor: ui.colors.background.main,
    color: ui.colors.neutral.main,
    ...typography.body,
  },
  disabled: {
    backgroundColor: ui.colors.background.secondary,
    opacity: 0.7,
  },
  errorBorder: {
    borderColor: ui.colors.danger.main,
  },
  errorText: {
    ...typography.bodySm,
    fontWeight: "700",
    color: ui.colors.danger.main,
  },
});
