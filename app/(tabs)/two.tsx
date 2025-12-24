import { StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Text, View } from "@/components/Themed";
import { useAuth } from "../../src/auth/auth";

export default function TabTwoScreen() {
  const router = useRouter();
  const { auth, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Statut</Text>
        <Text style={styles.value}>
          {auth.isLoggedIn ? "Connecté ✅" : "Déconnecté"}
        </Text>
      </View>

      <Pressable
        onPress={async () => {
          await logout();
          router.replace("/(auth)/login");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Se déconnecter</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  card: {
    padding: 16,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    gap: 6,
  },
  label: {
    fontSize: 12,
    opacity: 0.7,
  },
  value: {
    fontSize: 16,
    fontWeight: "700",
  },
  button: {
    marginTop: 16,
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
