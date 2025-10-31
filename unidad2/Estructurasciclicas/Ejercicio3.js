import React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function Ejercicio3() {
  const [gradeStr, setGradeStr] = React.useState('');
  const [message, setMessage] = React.useState('');

  const submit = () => {
    const g = Number(gradeStr);
    if (!Number.isFinite(g) || g < 0 || g > 10) {
      setMessage('Calificación inválida. Introduce un número entre 0 y 10.');
      setGradeStr('');
      return;
    }
    setMessage(`Calificación aceptada: ${g}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 3</Text>
      <Text>Introduce una calificación (0-10):</Text>
      <TextInput keyboardType="numeric" style={styles.input} value={gradeStr} onChangeText={setGradeStr} />
      <Button title="Enviar" onPress={submit} />
      <Text style={styles.message}>{message}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8 },
  message: { marginTop: 12, color: '#333' },
});