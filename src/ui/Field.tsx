import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Themed";
import { ui } from "./tokens";
import { Input } from "./Input";
import { InputWithIcon } from "./InputWithIcon";
import { TextArea } from "./TextArea";
import type { TextInputProps } from "react-native";
import { componentSpacing } from "./spacing";
import { typography } from "./typography";

type Props = {
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;

  kind?: "input" | "textarea";

  rightText?: string;
  onRightPress?: () => void;

  inputProps?: Omit<TextInputProps, "style">;

  minHeight?: number;
};

export function Field({
  label,
  hint,
  error,
  disabled,
  kind = "input",
  rightText,
  onRightPress,
  inputProps,
  minHeight,
}: Props) {
  const showRight = !!rightText;

  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}

      {kind === "textarea" ? (
        <TextArea
          disabled={disabled}
          error={error}
          minHeight={minHeight}
          value={typeof inputProps?.value === "string" ? inputProps.value : undefined}
          placeholder={typeof inputProps?.placeholder === "string" ? inputProps.placeholder : undefined}
          onChangeText={inputProps?.onChangeText}
        />
      ) : showRight ? (
        <InputWithIcon
          disabled={disabled}
          error={error}
          rightText={rightText}
          onRightPress={onRightPress}
          inputProps={inputProps}
        />
      ) : (
        <Input
          disabled={disabled}
          error={error}
          value={typeof inputProps?.value === "string" ? inputProps.value : undefined}
          placeholder={typeof inputProps?.placeholder === "string" ? inputProps.placeholder : undefined}
          onChangeText={inputProps?.onChangeText}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: componentSpacing.fieldGap },
  label: { ...typography.label, color: ui.colors.neutral.main },
  hint: { ...typography.bodySm, color: ui.colors.neutral.second, opacity: 0.75 },
});
