import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [dias, setDias] = useState("15"); // días trabajados (por quincena)
  const [salario, setSalario] = useState(null);

  const calcular = () => {
    const diasNum = parseFloat(dias) || 0;
    const horasPorDia = 8;
    const tarifaHora = 50;

    const horasTotales = horasPorDia * diasNum;
    const salarioBruto = horasTotales * tarifaHora;
    const compensacion = salarioBruto * 0.02; // 2%
    const descuentoIMSS = salarioBruto * 0.015; // 1.5%
    const descuentoISTE = salarioBruto * 0.012; // 1.2%

    const salarioNeto = salarioBruto + compensacion - descuentoIMSS - descuentoISTE;
    setSalario(salarioNeto.toFixed(2));
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Calculadora: salario por quincena</Text>
      <TextInput
        placeholder='Días trabajados'
        keyboardType='numeric'
        style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}}
        onChangeText={setDias}
        value={dias}
      />
      <Button title='Calcular' onPress={calcular} />
      {salario !== null && <Text style={{marginTop:10}}>Salario neto: ${salario}</Text>}
    </View>
  );
};
