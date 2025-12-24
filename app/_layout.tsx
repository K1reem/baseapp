import { Stack } from "expo-router";
import { AuthProvider } from "../src/auth/auth";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
