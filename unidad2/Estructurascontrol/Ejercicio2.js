import React from 'react';
import { ScrollView, Text, Button, StyleSheet } from 'react-native';

export default function Ejercicio2() {
  // Datos del enunciado: 8 horas diarias por quincena (15 días), 50 pesos/hora,
  // compensación 2%, descuentos: IMSS 1.5%, ISPT 1.2%
  const [result, setResult] = React.useState(null);

  const run = () => {
    const hoursPerDay = 8;
    const days = 15;
    const hours = hoursPerDay * days;
    const rate = 50;
    const gross = hours * rate;
    const comp = gross * 0.02;
    const imss = gross * 0.015;
    const ispt = gross * 0.012;
    const net = gross + comp - imss - ispt;
    setResult(
      `Horas totales: ${hours}\nBruto: ${gross.toFixed(2)}\nCompensación (2%): ${comp.toFixed(2)}\nIMSS (1.5%): ${imss.toFixed(2)}\nISPT (1.2%): ${ispt.toFixed(2)}\nNeto: ${net.toFixed(2)}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Ejercicio 2 - Salario neto quincenal</Text>
      <Text>Se calculan con 8 h/día, 15 días, 50 $/h y porcentajes dados.</Text>
      <Button title="Calcular salario" onPress={run} />
      {result && <Text style={styles.output}>{result}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  title: { fontWeight: '700', marginBottom: 8 },
  output: { marginTop: 12, whiteSpace: 'pre-wrap' },
});