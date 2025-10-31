import React, { useState } from 'react';
import {Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const[c1, cal1] = useState("");
  const[c2, cal2] = useState("");
  const[c3, cal3] = useState("");
  const[c4, cal4] = useState("");
  const[p, promedio] = useState(null);
  
  const calcular = () => {
    promedio((parseInt(c1) + parseInt(c2) + parseInt(c3) + parseInt(c4)) / 4);
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text>Promedio de 4 materias</Text>
      <TextInput placeholder='Calificacion 1' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={cal1} />
      <TextInput placeholder='Calificacion 2' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={cal2} />
      <TextInput placeholder='Calificacion 3' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={cal3} />
      <TextInput placeholder='Calificacion 4' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={cal4} />
      <Button title='Calcular' onPress={calcular} />
      {p !== null && <Text style={{ marginTop:10 }}>Resultado: {p}</Text>}
    </View>
  );
};
