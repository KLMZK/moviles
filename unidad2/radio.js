import React, { useState } from 'react';
import {Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[D, diametro] = useState("");
  const[R, resultado] = useState(null);
  
  const radio = () => {
    resultado(parseInt(D) / 2);
  };
  
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <text>Calcular el radio</text>
      <TextInput placeholder='Ingrese el diametro' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={diametro} />
      <Button title='Calcular' onPress={radio} />
      {R !== null && <Text style={{ marginTop:10 }}>Resultado: {R}</Text>}
    </View>
  );
};
