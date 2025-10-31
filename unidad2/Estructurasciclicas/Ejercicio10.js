import React from 'react';
import { ScrollView, Text, Button, StyleSheet } from 'react-native';

export default function Ejercicio10() {
  const [result, setResult] = React.useState(null);

  const run = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) sum += i * i;
    setResult(sum);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 10</Text>
      <Text>Suma de los cuadrados de los 100 primeros enteros</Text>
      <Button title="Calcular" onPress={run} />
      {result !== null && <Text style={styles.result}>Resultado: {result}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  result: { marginTop: 12 },
});