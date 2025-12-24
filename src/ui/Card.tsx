import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ui } from "./tokens";
import { componentSpacing } from "./spacing";
import { componentRadius } from "./radius";

type BaseProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function Card({ children, style }: BaseProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function CardHeader({ children, style }: BaseProps) {
  return <View style={[styles.header, style]}>{children}</View>;
}

export function CardContent({ children, style }: BaseProps) {
  return <View style={[styles.content, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: componentRadius.card,
    borderWidth: 1,
    borderColor: ui.colors.background.border,
    backgroundColor: ui.colors.background.main,
    overflow: "hidden",
  },
  header: {
    paddingHorizontal: componentSpacing.cardPaddingX,
    paddingTop: componentSpacing.cardPaddingY,
    paddingBottom: componentSpacing.fieldGap,
  },
  content: {
    paddingHorizontal: componentSpacing.cardPaddingX,
    paddingBottom: componentSpacing.cardPaddingY,
    paddingTop: componentSpacing.fieldGap,
  },
});
