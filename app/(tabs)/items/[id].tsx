import { StyleSheet, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text } from "@/components/Themed";
import { ui } from "@/src/ui/tokens";
import { Card, CardContent, CardHeader } from "@/src/ui/Card";
import { Button } from "@/src/ui/Button";

export default function ItemDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.page}>
      <Text style={styles.title}>Détail</Text>

      <Card>
        <CardHeader>
          <Text style={styles.cardTitle}>Item #{id}</Text>
        </CardHeader>

        <CardContent>
          <Text style={styles.text}>
            Ceci est une page de détail générique (App Shell).
          </Text>

          <Button label="Retour" onPress={() => router.back()} variant="neutral" />
        </CardContent>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 24,
    backgroundColor: ui.colors.background.main,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "800",
  },
  text: {
    marginBottom: 12,
    opacity: 0.75,
  },
});

