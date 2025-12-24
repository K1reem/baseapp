import React, { useMemo, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, TextInput, View } from "react-native";
import { useRouter } from "expo-router";
import { Text } from "@/components/Themed";

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

    if (n.length < 2) {
      setError("Veuillez entrer votre nom.");
      return;
    }
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
      // MOCK: simule un appel réseau (plus tard: vraie inscription)
      await new Promise((r) => setTimeout(r, 700));

      // ✅ Plus tard: afficher un message type "Vérifiez vos emails" si magic link / confirmation
      // Pour l'instant: on renvoie vers la page de connexion
      router.replace("/(auth)/login");
    } catch {
      setError("Inscription impossible. Réessayez.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.title}>Créer un compte</Text>
        <Text style={styles.subtitle}>Quelques infos et c'est parti.</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <View style={styles.inputGroup}>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Nom"
            autoCapitalize="words"
            textContentType="name"
            style={styles.input}
          />

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            style={styles.input}
          />

          <View style={styles.passwordRow}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Mot de passe"
              autoCapitalize="none"
              secureTextEntry={!showPassword}
              textContentType="newPassword"
              style={[styles.input, styles.passwordInput]}
            />
            <Pressable
              onPress={() => setShowPassword((v) => !v)}
              style={styles.eyeButton}
              accessibilityRole="button"
              accessibilityLabel={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
            >
              <Text style={styles.eyeText}>Oeil</Text>
            </Pressable>
          </View>
        </View>

        <Pressable
          onPress={onSubmit}
          disabled={!canSubmit}
          style={[styles.button, !canSubmit && styles.buttonDisabled]}
          accessibilityRole="button"
        >
          {isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonText}>Créer un compte</Text>
          )}
        </Pressable>

        <View style={styles.bottomRow}>
          <Text style={styles.bottomText}>Vous avez déjà un compte ? </Text>
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
    fontSize: 26,
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
  inputGroup: {
    gap: 10,
    marginTop: 6,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },
  passwordRow: {
    position: "relative",
    justifyContent: "center",
  },
  passwordInput: {
    paddingRight: 64,
  },
  eyeButton: {
    position: "absolute",
    right: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
  },
  eyeText: {
    fontSize: 12,
    fontWeight: "800",
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

