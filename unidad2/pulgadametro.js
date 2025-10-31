import { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const[p, pulgadas] = useState("");
  const[m, metros] = useState("");

  const calcular = () => {
    metros((parseFloat(p) / 39.37).toFixed(2))
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Pulgadas a metros</Text>
      <TextInput placeholder='Pulgadas' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={pulgadas}/>
      <Button title='Calcular' onPress={calcular} />
      {m !== null && <Text style={{marginTop:10}}>Metros: {m}</Text>}
    </View>
  );
};
