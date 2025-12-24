import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { Text } from "@/components/Themed";
import { useAuth } from "../../src/auth/auth";

import { Button } from "@/src/ui/Button";
import { Card, CardContent, CardHeader } from "@/src/ui/Card";
import { Field } from "@/src/ui/Field";
import { ui } from "@/src/ui/tokens";

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    const e = email.trim();
    return e.length > 3 && e.includes("@") && password.length >= 6 && !isSubmitting;
  }, [email, password, isSubmitting]);

  const onSubmit = async () => {
    setError(null);

    const e = email.trim();
    if (!e || !e.includes("@")) {
      setError("Veuillez entrer un email valide.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      return;
    }

    setIsSubmitting(true);
    try {
      // MOCK réseau
      await new Promise((r) => setTimeout(r, 600));

      // Plus tard (auth réelle) :
      // setError("Veuillez confirmer votre email via le lien reçu avant de vous connecter.");
      await login();
      router.replace("/(tabs)");
    } catch {
      setError("Connexion impossible. Réessayez.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.page}>
      <Card style={styles.card}>
        <CardHeader>
          <View style={styles.logoBox}>
            <Text style={styles.logoText}>LOGO</Text>
          </View>

          <Text style={styles.description}>
            Une phrase courte pour décrire l'app, simple et rassurante.
          </Text>

          <Text style={styles.title}>Connexion</Text>
          <Text style={styles.subtitle}>
            Ravi de vous revoir. Connectez-vous pour continuer.
          </Text>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </CardHeader>

        <CardContent>
          <View style={styles.form}>
            <Field
              label="Email"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              error={error && !email.includes("@") ? "Email invalide" : undefined}
            />

            <Field
              label="Mot de passe"
              placeholder="Mot de passe"
              value={password}
              onChangeText={setPassword}
              rightText={showPassword ? "Masquer" : "Oeil"}
              onRightPress={() => setShowPassword((v) => !v)}
              error={error && password.length < 6 ? "6 caractères minimum" : undefined}
            />

            <Pressable
              onPress={() => router.push("/(auth)/forgot-password")}
              style={styles.forgotWrap}
              accessibilityRole="button"
            >
              <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
            </Pressable>

            <Button
              label="Connexion"
              onPress={onSubmit}
              disabled={!canSubmit}
              loading={isSubmitting}
              style={{ marginTop: ui.spacing.sm }}
            />

            <View style={styles.bottomRow}>
              <Text style={styles.bottomText}>Vous n'avez pas de compte ? </Text>
              <Pressable onPress={() => router.push("/(auth)/register")} accessibilityRole="button">
                <Text style={styles.bottomLink}>Créer un compte</Text>
              </Pressable>
            </View>

            <Pressable
              onPress={() => router.push("/design-system")}
              style={styles.dsLinkWrap}
              accessibilityRole="button"
            >
              <Text style={styles.dsLink}>Voir le Design System →</Text>
            </Pressable>
          </View>
        </CardContent>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: ui.spacing.xl,
    justifyContent: "center",
    backgroundColor: ui.colors.background.main,
  },
  card: {
    borderRadius: ui.radius.xl,
  },
  logoBox: {
    alignSelf: "center",
    width: 72,
    height: 72,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: ui.colors.background.border,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontWeight: "800",
    fontSize: 12,
    opacity: 0.8,
  },
  description: {
    textAlign: "center",
    opacity: 0.8,
    fontSize: 14,
    marginTop: ui.spacing.sm,
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "800",
    marginTop: ui.spacing.sm,
  },
  subtitle: {
    textAlign: "center",
    opacity: 0.8,
    fontSize: 14,
    marginTop: ui.spacing.xs,
  },
  errorText: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "800",
    color: ui.colors.danger.main,
    marginTop: ui.spacing.sm,
  },
  form: {
    gap: ui.spacing.md,
  },
  forgotWrap: {
    alignSelf: "flex-end",
    marginTop: -6,
  },
  forgotText: {
    fontSize: 12,
    fontWeight: "800",
    opacity: 0.85,
    color: ui.colors.primary.main,
  },
  bottomRow: {
    marginTop: ui.spacing.sm,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  bottomText: {
    fontSize: 13,
    opacity: 0.85,
    color: ui.colors.neutral.second,
  },
  bottomLink: {
    fontSize: 13,
    fontWeight: "900",
    color: ui.colors.primary.main,
  },
  dsLinkWrap: {
    marginTop: ui.spacing.sm,
    alignItems: "center",
  },
  dsLink: {
    fontSize: 13,
    fontWeight: "800",
    opacity: 0.85,
    color: ui.colors.neutral.second,
  },
});
