import { useState } from 'react';
import { Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const[k, setKilo] = useState("");
  const[l, setLibra] = useState("");

  const calcular = () => {
    setLibra((parseFloat(k) * 2.205).toFixed(4));
  }

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>Kilos a Libras</Text>
      <TextInput placeholder='Kilos' keyboardType='numeric' style={{borderWidth:1, width:200, textAlign:'center', marginTop:10, marginBottom:10}} onChangeText={setKilo} />
      <Button title='Calcular' onPress={calcular} />
      {l !== null && <Text style={{marginTop: 10}}>Libras: {l}</Text>}
    </View>
  );
}
