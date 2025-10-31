import React from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Ejercicio5() {
  const [values, setValues] = React.useState(Array.from({ length: 10 }, () => ''));
  const [message, setMessage] = React.useState('');

  const setVal = (idx, v) => {
    const copy = values.slice();
    copy[idx] = v;
    setValues(copy);
  };

  const submit = () => {
    const nums = values.map((v) => Number(v));
    for (let i = 0; i < nums.length; i++) {
      if (!Number.isFinite(nums[i]) || nums[i] < 6 || nums[i] > 10) {
        setMessage(`Entrada inválida en posición ${i + 1}. Sólo se aceptan 6-10.`);
        return;
      }
    }
    setMessage(`Todas las calificaciones aceptadas: ${nums.join(', ')}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 5</Text>
      <Text>Lee 10 calificaciones (solo 6 a 10 aceptadas):</Text>
      {values.map((v, i) => (
        <TextInput key={i} style={styles.input} keyboardType="numeric" placeholder={`Calificación ${i + 1}`} value={v} onChangeText={(t) => setVal(i, t)} />
      ))}
      <Button title="Validar" onPress={submit} />
      <Text style={styles.message}>{message}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 6 },
  message: { marginTop: 12 },
});