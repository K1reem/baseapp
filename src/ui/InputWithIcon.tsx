import React from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "@/components/Themed";
import { ui } from "./tokens";
import { componentSpacing } from "./spacing";
import { componentRadius } from "./radius";
import { typography } from "./typography";

type Props = {
  error?: string;
  disabled?: boolean;

  rightText?: string;
  onRightPress?: () => void;
  rightStyle?: ViewStyle;

  inputProps?: Omit<TextInputProps, "style">;
};

export function InputWithIcon({
  error,
  disabled = false,
  rightText,
  onRightPress,
  rightStyle,
  inputProps,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.row,
          error && styles.errorBorder,
          disabled && styles.disabled,
        ]}
      >
        <TextInput
          {...inputProps}
          editable={!disabled && inputProps?.editable !== false}
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
  wrapper: { gap: componentSpacing.fieldGap },
  row: {
    minHeight: 46,
    borderRadius: componentRadius.input,
    borderWidth: 1,
    borderColor: ui.colors.background.border,
    paddingLeft: componentSpacing.inputPaddingX,
    paddingRight: componentSpacing.inputPaddingX,
    backgroundColor: ui.colors.background.main,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    paddingVertical: componentSpacing.inputPaddingY,
    paddingRight: componentSpacing.inputPaddingX,
    color: ui.colors.neutral.main,
    ...typography.body,
  },
  rightPill: {
    borderRadius: componentRadius.pill,
    borderWidth: 1,
    borderColor: ui.colors.background.border,
    paddingHorizontal: componentSpacing.inputPaddingX,
    paddingVertical: 6,
  },
  rightText: {
    ...typography.bodySm,
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
    ...typography.bodySm,
    fontWeight: "700",
    color: ui.colors.danger.main,
  },
});
