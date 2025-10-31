import React from 'react';
import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Ejercicio4() {
  const initial = Array.from({ length: 5 }, () => ['', '', '']);
  const [grades, setGrades] = React.useState(initial);
  const [results, setResults] = React.useState(null);

  const setGrade = (studentIdx, gradeIdx, value) => {
    const copy = grades.map((g) => g.slice());
    copy[studentIdx][gradeIdx] = value;
    setGrades(copy);
  };

  const submit = () => {
    const summaries = grades.map((g, idx) => {
      const nums = g.map((v) => Number(v));
      if (nums.some((n) => !Number.isFinite(n))) {
        return `Alumno ${idx + 1}: entrada inválida`;
      }
      const avg = (nums[0] + nums[1] + nums[2]) / 3;
      return `Alumno ${idx + 1}: notas=${nums.join(', ')} promedio=${avg.toFixed(2)}`;
    });
    setResults(summaries.join('\n'));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 4</Text>
      {grades.map((g, i) => (
        <View key={i} style={styles.row}>
          <Text style={styles.student}>Alumno {i + 1}</Text>
          {g.map((val, j) => (
            <TextInput
              key={j}
              style={styles.input}
              keyboardType="numeric"
              placeholder={`Nota ${j + 1}`}
              value={val}
              onChangeText={(t) => setGrade(i, j, t)}
            />
          ))}
        </View>
      ))}
      <Button title="Calcular promedios" onPress={submit} />
      {results && <Text style={styles.result}>{results}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  row: { marginBottom: 12 },
  student: { fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 6, marginVertical: 6 },
  result: { marginTop: 12, whiteSpace: 'pre-wrap' },
});