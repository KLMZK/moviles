import React from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Ejercicio7() {
  const [qtyStr, setQtyStr] = React.useState('');
  const [result, setResult] = React.useState(null);

  const run = () => {
    const q = parseInt(qtyStr, 10);
    if (!Number.isFinite(q) || q < 0) {
      setResult('Cantidad inválida.');
      return;
    }
    let unit;
    if (q >= 100) {
      unit = 0.8; // aclaración: el enunciado original era confuso; se interpreta 10+ => $0.80, else tiers
      // Si la intención es otra, ajusta los límites.
    } else if (q > 50) {
      unit = 1.2;
    } else if (q >= 30) {
      unit = 1.5;
    } else {
      unit = 2.1;
    }
    setResult(`Cantidad: ${q}\nPrecio unitario: $${unit}\nTotal: $${(q * unit).toFixed(2)}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 7 - Lápices de colores</Text>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Cantidad" value={qtyStr} onChangeText={setQtyStr} />
      <Button title="Calcular costo" onPress={run} />
      {result && <Text style={styles.result}>{result}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 6 },
  result: { marginTop: 12, whiteSpace: 'pre-wrap' },
});