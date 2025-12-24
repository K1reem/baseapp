import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Themed";
import { ui } from "@/src/ui/tokens";
import { Card, CardContent, CardHeader } from "@/src/ui/Card";
import { Button } from "@/src/ui/Button";

export default function ItemsScreen() {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Items</Text>

      <Card>
        <CardHeader>
          <Text style={styles.cardTitle}>Liste</Text>
        </CardHeader>

        <CardContent>
          <Text style={styles.emptyText}>Liste vide pour le moment.</Text>

          <Button
            label="Créer un item"
            onPress={() => {}}
            variant="primary"
          />
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
  emptyText: {
    marginBottom: 12,
    opacity: 0.7,
  },
});

