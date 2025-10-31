import { useState } from 'react';
import {Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[p, pies] = useState("");
  const[p2, pulgada] = useState("");

  const calcular = () => {
    pulgada((parseFloat(p) * 12).toFixed(2));
  }

  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Text>Pies a Pulgadas</Text>
      <TextInput placeholder='Pies' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={pies} />
      <Button title='Calcular' onPress={calcular} />
      {p2 !== null && <Text style={{marginTop:10}}>Pulgadas: {p2}</Text>}
    </View>
  );
};
