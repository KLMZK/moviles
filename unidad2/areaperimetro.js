import React, { useState } from 'react';
import {Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const[l, setLado] = useState("");
  const[a, area] = useState("");
  const[p, perimetro] = useState("");
  
  const calcular = () => {
    area(parseInt(l)*parseInt(l));
    perimetro(parseInt(l)*4);
  } 

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Calcular perimetro y area de un cuadrado</Text>
      <TextInput placeholder='Lado' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={setLado} />
      <Button title='Calcular' onPress={calcular} />
      {p !== null && <Text style={{ marginTop:10 }}>Perimetro: {p}</Text>}
      {a !== null && <Text style={{marginTop:10}}>Area: {a}</Text>}
    </View>
  );
};
