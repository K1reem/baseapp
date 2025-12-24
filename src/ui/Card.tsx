import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ui } from "./tokens";

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
    borderRadius: ui.radius.xl,
    borderWidth: 1,
    borderColor: ui.colors.background.border,
    backgroundColor: "white",
    overflow: "hidden",
  },
  header: {
    paddingHorizontal: ui.spacing.lg,
    paddingTop: ui.spacing.lg,
    paddingBottom: ui.spacing.sm,
  },
  content: {
    paddingHorizontal: ui.spacing.lg,
    paddingBottom: ui.spacing.lg,
    paddingTop: ui.spacing.sm,
  },
});

