import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Themed";
import { ui } from "./tokens";
import { Input } from "./Input";
import { InputWithIcon } from "./InputWithIcon";
import { TextArea } from "./TextArea";

type Props = {
  label?: string;
  hint?: string;
  error?: string;
  disabled?: boolean;

  kind?: "input" | "textarea";
  rightText?: string;
  onRightPress?: () => void;

  value?: string;
  placeholder?: string;
  onChangeText?: (v: string) => void;

  // TextArea only
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
  value,
  placeholder,
  onChangeText,
  minHeight,
}: Props) {
  const showRight = !!rightText;

  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      {hint ? <Text style={styles.hint}>{hint}</Text> : null}

      {kind === "textarea" ? (
        <TextArea
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          disabled={disabled}
          error={error}
          minHeight={minHeight}
        />
      ) : showRight ? (
        <InputWithIcon
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          disabled={disabled}
          error={error}
          rightText={rightText}
          onRightPress={onRightPress}
        />
      ) : (
        <Input
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          disabled={disabled}
          error={error}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 6 },
  label: { fontSize: 13, fontWeight: "800", color: ui.colors.neutral.main },
  hint: { fontSize: 12, opacity: 0.75, color: ui.colors.neutral.second },
});

