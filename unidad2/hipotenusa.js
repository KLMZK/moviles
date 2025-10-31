import React, { useState } from 'react';
import {Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const[a, setA] = useState(0);
  const[b, setB] = useState(0);
  const[hipotenusa, setHipotenusa] = useState(null);
  
  const calcular = () => {
    setHipotenusa((Math.sqrt((a * a) + (b * b))).toFixed(2));
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Calculo de hipotenusa</Text>
      <TextInput placeholder='Cateto a' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={setA} />
      <TextInput placeholder='Cateto b' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={setB} />
      <Button title='Calcular' onPress={calcular} />
      {hipotenusa !== null && <Text style={{ marginTop:10 }}>Resultado: {hipotenusa}</Text>}
    </View>
  );
};
