import { useState } from 'react';
import {Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[C, Centigrados] = useState("");
  const[F, Fahrenheit] = useState("");

  const calcular = () => {
    Fahrenheit(((parseFloat(C) * 1.8) + 32).toFixed(2));
  }

  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Text>Grados Centrigrados a Fahrenheit</Text>
      <TextInput placeholder='Centigrados' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={Centigrados} />
      <Button title='Calcular' onPress={calcular} />
      {F !== null && <Text style={{marginTop:10}}>Fahrenheit: {F}</Text>}
    </View>
  );
};