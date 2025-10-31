import React, { useState} from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[h, altura] = useState("");
  const[b, base] = useState("");
  const[a, area] = useState("");

  const calcular = () => {
    area((parseInt(h)*parseInt(b))/2)
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Area del triangulo</Text>
      <TextInput placeholder='Altura' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={altura} />
      <TextInput placeholder='Base' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={base} />
      <Button title='Calcular' onPress={calcular} />
      {a !== null && <Text style={{marginTop:10}} >Area: {a}</Text>}
    </View>
  );
};
