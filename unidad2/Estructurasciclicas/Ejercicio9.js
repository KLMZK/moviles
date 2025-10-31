import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';

export default function Ejercicio9() {
  const [history, setHistory] = React.useState([]);
  const [finished, setFinished] = React.useState(false);

  const press = (ans) => {
    setHistory((h) => [...h, ans]);
    if (ans.toUpperCase() === 'N') setFinished(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 9</Text>
      {!finished ? (
        <View>
          <Text>¿Desea continuar? (S / N)</Text>
          <View style={styles.buttons}>
            <Button title="S" onPress={() => press('S')} />
            <View style={{ width: 8 }} />
            <Button title="N" onPress={() => press('N')} />
          </View>
        </View>
      ) : (
        <Text>Se terminó al recibir N.</Text>
      )}
      <Text style={styles.historyTitle}>Respuestas:</Text>
      <Text>{history.join(', ')}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  buttons: { flexDirection: 'row', marginVertical: 8 },
  historyTitle: { marginTop: 12, fontWeight: '700' },
});