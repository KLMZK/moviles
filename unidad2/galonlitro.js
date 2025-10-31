import { useState } from 'react';
import {Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[g, galon] = useState("");
  const[l, litro] = useState("");

  const calcular = () => {
    litro((parseFloat(g) * 3.7854).toFixed(2));
  }

  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Text>Galones a Litros</Text>
      <TextInput placeholder='Galones' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={galon} />
      <Button title='Calcular' onPress={calcular} />
      {l !== null && <Text style={{marginTop:10}}>Metros: {l}</Text>}
    </View>
  );
};