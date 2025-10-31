import React from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Ejercicio9() {
  const [hoursStr, setHoursStr] = React.useState('');
  const [result, setResult] = React.useState(null);

  const run = () => {
    const h = Number(hoursStr);
    if (!Number.isFinite(h) || h < 0) {
      setResult('Horas inválidas.');
      return;
    }
    const baseRate = 50;
    const extraRate = 70;
    const baseHours = Math.min(40, h);
    const extra = Math.max(0, h - 40);
    const pay = baseHours * baseRate + extra * extraRate;
    setResult(`Horas: ${h}\nSalario: $${pay.toFixed(2)}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 9 - Salario semanal con horas extra</Text>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Horas trabajadas" value={hoursStr} onChangeText={setHoursStr} />
      <Button title="Calcular" onPress={run} />
      {result && <Text style={styles.result}>{result}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 6 },
  result: { marginTop: 12 },
});