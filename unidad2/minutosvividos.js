import React, { useState } from 'react';
import {Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const[edad, setEdad] = useState(0);
  const[minutosvividos, setMinutosvividos] = useState(null);
  
  const calcular = () => {
    setMinutosvividos(edad * 365 * 24 * 60);
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Calcular minutosvividos</Text>
      <TextInput placeholder='Edad' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={setEdad} />
      <Button title='Calcular' onPress={calcular} />
      {minutosvividos !== null && <Text style={{ marginTop:10 }}>Minutos vividos: {minutosvividos}</Text>}
    </View>
  );
};
