import React, { useState } from 'react';
import {Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const[l, setLado] = useState("");
  const[p, setPerimetro] = useState(null);

  const calcular = () => {
    setPerimetro(parseInt(l) * 4);
  }

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Calcular perimetro de un cuadrado</Text>
      <TextInput placeholder='Lado' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={setLado} />
      <Button title='Calcular' onPress={calcular} />
      {p !== null && <Text style={{ marginTop:10 }}>Perimetro: {p}</Text>}
    </View>
  );
};
