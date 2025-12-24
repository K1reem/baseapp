import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { Button } from "@/src/ui/Button";
import { Input } from "@/src/ui/Input";
import { InputWithIcon } from "@/src/ui/InputWithIcon";
import { TextArea } from "@/src/ui/TextArea";
import { Field } from "@/src/ui/Field";
import { Card, CardContent, CardHeader } from "@/src/ui/Card";

export default function DesignSystemScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Design System</Text>
      <Text style={styles.subtitle}>
        Page de référence (boutons, inputs, cards…). Accessible sans connexion.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Prochaine étape</Text>
        <Text style={styles.cardText}>
          On crée nos composants UI (Button / Input / Card) puis on les affiche ici.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Buttons</Text>

        <Button label="Primary" onPress={() => {}} />
        <Button label="Loading" loading />
        <Button label="Disabled" disabled />
        <Button label="Danger" variant="danger" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Inputs</Text>

        <Input placeholder="Email" />
        <Input placeholder="Disabled" disabled />
        <Input placeholder="Avec erreur" error="Champ obligatoire" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Input with icon</Text>
        <InputWithIcon placeholder="Mot de passe" rightText="Oeil" />
        <InputWithIcon placeholder="Avec erreur" rightText="Oeil" error="Champ obligatoire" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TextArea</Text>
        <TextArea placeholder="Description..." />
        <TextArea placeholder="Avec erreur" error="Trop court" />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Field (master)</Text>
        <Field label="Email" placeholder="Email" />
        <Field label="Mot de passe" placeholder="Mot de passe" rightText="Oeil" />
        <Field label="Description" kind="textarea" placeholder="Votre message..." />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Card</Text>

        <Card>
          <CardHeader>
            <Text style={{ fontSize: 16, fontWeight: "800" }}>Titre de card</Text>
            <Text style={{ opacity: 0.8 }}>Sous-titre / description courte</Text>
          </CardHeader>

          <CardContent>
            <Text>Contenu de la card. On mettra ici des infos, formulaires, listes…</Text>
          </CardContent>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, gap: 12 },
  title: { fontSize: 28, fontWeight: "800", textAlign: "center" },
  subtitle: { fontSize: 14, textAlign: "center", opacity: 0.8 },
  card: { marginTop: 16, padding: 16, borderRadius: 16, borderWidth: StyleSheet.hairlineWidth, gap: 6 },
  cardTitle: { fontSize: 16, fontWeight: "800" },
  cardText: { fontSize: 14, opacity: 0.85 },
  section: { marginTop: 18, gap: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "800" }
});

