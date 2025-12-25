import { Redirect, Tabs } from 'expo-router';
import React from 'react';
import { useAuth } from "../../src/auth/auth";

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { Icon } from "@/src/ui/Icon";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { auth } = useAuth();
  if (!auth.isHydrated) return null;
  if (!auth.isLoggedIn) return <Redirect href="/(auth)/login" />;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} variant="regular" />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Détails',
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} variant="regular" />
          ),
        }}
      />
      <Tabs.Screen
        name="items"
        options={{
          title: "Items",
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" size={size} color={color} variant="regular" />
          ),
        }}
      />
    </Tabs>
  );
}
