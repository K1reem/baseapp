import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { Text } from "@/components/Themed";
import { ui } from "@/src/ui/tokens";
import { Card, CardContent, CardHeader } from "@/src/ui/Card";
import { Field } from "@/src/ui/Field";
import { Button } from "@/src/ui/Button";

export default function RegisterScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    const n = name.trim();
    const e = email.trim();
    return n.length >= 2 && e.length > 3 && e.includes("@") && password.length >= 6 && !isSubmitting;
  }, [name, email, password, isSubmitting]);

  const onSubmit = async () => {
    setError(null);

    const n = name.trim();
    const e = email.trim();

    if (n.length < 2) return setError("Veuillez entrer votre nom.");
    if (!e || !e.includes("@")) return setError("Veuillez entrer un email valide.");
    if (!password || password.length < 6) return setError("Le mot de passe doit contenir au moins 6 caractères.");

    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 700)); // mock
      router.replace("/(auth)/login");
    } catch {
      setError("Inscription impossible. Réessayez.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.page}>
      <Card>
        <CardHeader>
          <Text style={styles.title}>Créer un compte</Text>
          <Text style={styles.subtitle}>Quelques infos et c'est parti.</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </CardHeader>

        <CardContent>
          <View style={styles.form}>
            <Field
              label="Nom"
              value={name}
              onChangeText={setName}
              placeholder="Nom"
            />

            <Field
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />

            <Field
              label="Mot de passe"
              value={password}
              onChangeText={setPassword}
              placeholder="Mot de passe"
              rightText={showPassword ? "Masquer" : "Oeil"}
              onRightPress={() => setShowPassword((v) => !v)}
            />

            <Button
              label="Créer un compte"
              onPress={onSubmit}
              loading={isSubmitting}
              disabled={!canSubmit}
              variant="primary"
            />

            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>Vous avez déjà un compte ? </Text>
              <Pressable onPress={() => router.replace("/(auth)/login")} accessibilityRole="button">
                <Text style={styles.bottomLink}>Se connecter</Text>
              </Pressable>
            </View>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: ui.colors.background.main,
  },
  title: { textAlign: "center", fontSize: 26, fontWeight: "800" },
  subtitle: { textAlign: "center", opacity: 0.8, fontSize: 14, marginBottom: 6 },
  errorText: { textAlign: "center", fontSize: 13, fontWeight: "800", color: ui.colors.danger.main },
  form: { gap: 12 },
  bottomRow: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", marginTop: 8 },
  bottomText: { fontSize: 13, opacity: 0.85 },
  bottomLink: { fontSize: 13, fontWeight: "800", color: ui.colors.primary.main },
});
