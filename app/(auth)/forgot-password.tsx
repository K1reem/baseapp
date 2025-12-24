import React, { useMemo, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { Text } from "@/components/Themed";

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

      // ✅ Message "safe" (ne révèle pas si un compte existe)
      setSuccess("Si un compte existe pour cet email, vous recevrez un message pour réinitialiser votre mot de passe.");
    } catch {
      setError("Impossible d'envoyer l'email. Réessayez.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.title}>Mot de passe oublié</Text>
        <Text style={styles.subtitle}>
          Entrez votre email et nous vous enverrons un lien de réinitialisation.
        </Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        {success ? <Text style={styles.successText}>{success}</Text> : null}

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          style={styles.input}
        />

        <Pressable
          onPress={onSubmit}
          disabled={!canSubmit}
          style={[styles.button, !canSubmit && styles.buttonDisabled]}
          accessibilityRole="button"
        >
          {isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonText}>Envoyer</Text>
          )}
        </Pressable>

        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Vous vous souvenez de votre mot de passe ? </Text>
          <Pressable onPress={() => router.replace("/(auth)/login")} accessibilityRole="button">
            <Text style={styles.bottomLink}>Se connecter</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  card: {
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 20,
    gap: 12,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "800",
  },
  subtitle: {
    textAlign: "center",
    opacity: 0.8,
    fontSize: 14,
    marginBottom: 4,
  },
  errorText: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "700",
  },
  successText: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "700",
    opacity: 0.9,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    marginTop: 6,
  },
  button: {
    marginTop: 6,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 46,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "800",
  },
  bottomRow: {
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  bottomText: {
    fontSize: 13,
    opacity: 0.85,
  },
  bottomLink: {
    fontSize: 13,
    fontWeight: "800",
  },
});

