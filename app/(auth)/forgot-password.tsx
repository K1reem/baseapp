import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { Text } from "@/components/Themed";
import { ui } from "@/src/ui/tokens";
import { Card, CardContent, CardHeader } from "@/src/ui/Card";
import { Field } from "@/src/ui/Field";
import { Button } from "@/src/ui/Button";

export default function ForgotPasswordScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    const e = email.trim();
    return e.length > 3 && e.includes("@") && !isSubmitting;
  }, [email, isSubmitting]);

  const onSubmit = async () => {
    setError(null);
    setSuccess(null);

    const e = email.trim();
    if (!e || !e.includes("@")) {
      setError("Veuillez entrer un email valide.");
      return;
    }

    setIsSubmitting(true);
    try {
      // MOCK : simule un appel réseau
      await new Promise((r) => setTimeout(r, 700));

      setSuccess(
        "Si un compte existe pour cet email, vous recevrez un message pour réinitialiser votre mot de passe."
      );
    } catch {
      setError("Impossible d'envoyer l'email. Réessayez.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.page}>
      <Card>
        <CardHeader>
          <Text style={styles.title}>Mot de passe oublié</Text>
          <Text style={styles.subtitle}>
            Entrez votre email et nous vous enverrons un lien de réinitialisation.
          </Text>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          {success ? <Text style={styles.successText}>{success}</Text> : null}
        </CardHeader>

        <CardContent>
          <View style={styles.form}>
            <Field
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
            />

            <Button
              label="Envoyer"
              onPress={onSubmit}
              loading={isSubmitting}
              disabled={!canSubmit}
              variant="primary"
            />

            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>Vous vous souvenez de votre mot de passe ? </Text>
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
  title: { textAlign: "center", fontSize: 24, fontWeight: "800" },
  subtitle: { textAlign: "center", opacity: 0.8, fontSize: 14, marginBottom: 6 },
  errorText: { textAlign: "center", fontSize: 13, fontWeight: "800", color: ui.colors.danger.main },
  successText: { textAlign: "center", fontSize: 13, fontWeight: "800", color: ui.colors.success.main },
  form: { gap: 12 },
  bottomRow: { flexDirection: "row", justifyContent: "center", flexWrap: "wrap", marginTop: 8 },
  bottomText: { fontSize: 13, opacity: 0.85 },
  bottomLink: { fontSize: 13, fontWeight: "800", color: ui.colors.primary.main },
});
