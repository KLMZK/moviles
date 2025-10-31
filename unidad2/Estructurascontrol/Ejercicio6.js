import React from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Ejercicio6() {
  const [qtyStr, setQtyStr] = React.useState('');
  const [result, setResult] = React.useState(null);

  const run = () => {
    const q = parseInt(qtyStr, 10);
    if (!Number.isFinite(q) || q < 0) {
      setResult('Cantidad inválida.');
      return;
    }
    let unit;
    if (q > 15) unit = 85;
    else if (q > 10) unit = 92;
    else unit = 99;
    setResult(`Cantidad: ${q}\nPrecio unitario: $${unit}\nTotal: $${(q * unit).toFixed(2)}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 6 - Precio de balones</Text>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Cantidad" value={qtyStr} onChangeText={setQtyStr} />
      <Button title="Calcular" onPress={run} />
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