import { useState } from 'react';
import {Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[p, pies] = useState("");
  const[m, metro] = useState("");

  const calcular = () => {
    metro((parseFloat(p) * 0.3048).toFixed(2));
  }

  return (
    <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
      <Text>Pies a Metros</Text>
      <TextInput placeholder='Pies' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={pies} />
      <Button title='Calcular' onPress={calcular} />
      {m !== null && <Text style={{marginTop:10}}>Metros: {m}</Text>}
    </View>
  );
};
