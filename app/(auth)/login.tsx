import { Text, View } from "@/components/Themed";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { useAuth } from "../../src/auth/auth";

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>
      <Text style={styles.subtitle}>Login obligatoire (mock pour l'instant)</Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>
          Prochaine étape: ajouter un "faux bouton se connecter" qui passe sur l'app.
        </Text>

        <Pressable
          onPress={async () => {
            await login();
            router.replace("/(tabs)");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center", gap: 12 },
  title: { fontSize: 32, fontWeight: "700", textAlign: "center" },
  subtitle: { fontSize: 16, textAlign: "center", opacity: 0.8 },
  card: { marginTop: 16, padding: 16, borderRadius: 16, borderWidth: StyleSheet.hairlineWidth, gap: 12 },
  cardText: { fontSize: 14, opacity: 0.85 },
  button: {
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
  },
});

