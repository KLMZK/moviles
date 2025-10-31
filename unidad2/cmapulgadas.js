import React, { useState } from 'react';
import {Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [cm, centimetros] = useState("");
  const [p, pulgadas] = useState(null);

  const calcular = () => {
    pulgadas((parseFloat(cm) / 2.54).toFixed(2));
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calcular centimetros a pulgadas</Text>
      <TextInput placeholder='Centimetros' keyboardType='numeric' style={{ borderWidth: 1, width: 200, textAlign: 'center', marginTop: 10, marginBottom: 10 }} onChangeText={centimetros} />
      <Button title='Calcular' onPress={calcular} />
      {p !== null && <Text style={{ marginTop: 10 }}>Resultado: {p} pulgadas</Text>}
    </View>
  );
};
