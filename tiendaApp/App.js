import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const API = "http://192.168.0.127/api";

  const obtenerDatos = () => {
    fetch(`${API}/obtener.php`)
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(err => console.error(err));
  };

  const crearProducto = () => {
    fetch(`${API}/crear.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, precio })
    })
      .then(res => res.json())
      .then(() => {
        obtenerDatos();
        setNombre("");
        setPrecio("");
      });
  };

  const eliminarProducto = (id) => {
    fetch(`${API}/eliminar.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    })
      .then(res => res.json())
      .then(() => obtenerDatos());
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tienda</Text>

      <FlatList
        data={productos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre} - ${item.precio}</Text>
            <Button title="Eliminar" onPress={() => eliminarProducto(item.id)} />
          </View>
        )}
      />

      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={styles.input} />
      <TextInput placeholder="Precio" value={precio} onChangeText={setPrecio} keyboardType="numeric" style={styles.input} />
      <Button title="Crear producto" onPress={crearProducto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, marginVertical: 5, padding: 8 },
  item: { marginBottom: 10 }
});
