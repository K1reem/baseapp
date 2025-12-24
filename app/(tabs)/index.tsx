import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accueil</Text>

      <Text style={styles.subtitle}>
        Base Expo Tabs OK ✅
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Prochaine étape</Text>
        <Text style={styles.cardText}>
          On va renommer les onglets et créer un écran Détails.
        </Text>
      </View>
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
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.8,
  },
  card: {
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    opacity: 0.85,
  },
});
