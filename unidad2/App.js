import React from 'react';
import { SafeAreaView, View, Text, Button, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // añadido: combobox
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Añade estas entradas al mapa MODULE_LOADERS (combina con las existentes)
const MODULE_LOADERS = {
  // Estructurasciclicas
  'Estructurasciclicas/Ejercicio1.js': () => require('./Estructurasciclicas/Ejercicio1'),
  'Estructurasciclicas/Ejercicio2.js': () => require('./Estructurasciclicas/Ejercicio2'),
  'Estructurasciclicas/Ejercicio3.js': () => require('./Estructurasciclicas/Ejercicio3'),
  'Estructurasciclicas/Ejercicio4.js': () => require('./Estructurasciclicas/Ejercicio4'),
  'Estructurasciclicas/Ejercicio5.js': () => require('./Estructurasciclicas/Ejercicio5'),
  'Estructurasciclicas/Ejercicio6.js': () => require('./Estructurasciclicas/Ejercicio6'),
  'Estructurasciclicas/Ejercicio7.js': () => require('./Estructurasciclicas/Ejercicio7'),
  'Estructurasciclicas/Ejercicio8.js': () => require('./Estructurasciclicas/Ejercicio8'),
  'Estructurasciclicas/Ejercicio9.js': () => require('./Estructurasciclicas/Ejercicio9'),
  'Estructurasciclicas/Ejercicio10.js': () => require('./Estructurasciclicas/Ejercicio10'),

  // Estructurascontrol (si ya existen mantenlas)
  'Estructurascontrol/Ejercicio1.js': () => require('./Estructurascontrol/Ejercicio1'),
  'Estructurascontrol/Ejercicio2.js': () => require('./Estructurascontrol/Ejercicio2'),
  'Estructurascontrol/Ejercicio3.js': () => require('./Estructurascontrol/Ejercicio3'),
  'Estructurascontrol/Ejercicio4.js': () => require('./Estructurascontrol/Ejercicio4'),
  'Estructurascontrol/Ejercicio5.js': () => require('./Estructurascontrol/Ejercicio5'),
  'Estructurascontrol/Ejercicio6.js': () => require('./Estructurascontrol/Ejercicio6'),
  'Estructurascontrol/Ejercicio7.js': () => require('./Estructurascontrol/Ejercicio7'),
  'Estructurascontrol/Ejercicio8.js': () => require('./Estructurascontrol/Ejercicio8'),
  'Estructurascontrol/Ejercicio9.js': () => require('./Estructurascontrol/Ejercicio9'),
  'Estructurascontrol/Ejercicio10.js': () => require('./Estructurascontrol/Ejercicio10'),

  // Otros módulos en la raíz del proyecto
  'areaperimetro.js': () => require('./areaperimetro'),
  'triangulo.js': () => require('./triangulo'),
  'salarioneto.js': () => require('./salarioneto'),
  'radio.js': () => require('./radio'),
  'pulgadametro.js': () => require('./pulgadametro'),
  'promedio.js': () => require('./promedio'),
  'piesmetros.js': () => require('./piesmetros'),
  'piepulgada.js': () => require('./piepulgada'),
  'perimetro.js': () => require('./perimetro'),
  'minutosvividos.js': () => require('./minutosvividos'),
  'Mayor.js': () => require('./Mayor'),
  'kilolibra.js': () => require('./kilolibra'),
  'hipotenusa.js': () => require('./hipotenusa'),
  'grados.js': () => require('./grados'),
  'galonlitro.js': () => require('./galonlitro'),
  'Dado.js': () => require('./Dado'),
  'cmapulgadas.js': () => require('./cmapulgadas'),
  // añade más si aparecen otros archivos
};

function MenuScreen({ navigation }) {
  const names = Object.keys(MODULE_LOADERS);
  const [selectedName, setSelectedName] = React.useState(names.length ? names[0] : '');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <Text style={styles.title}>Selecciona un módulo</Text>

        <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 6, overflow: 'hidden', marginBottom: 12 }}>
          <Picker
            selectedValue={selectedName}
            onValueChange={(val) => setSelectedName(val)}
            mode="dropdown"
          >
            {names.length === 0 && <Picker.Item label="(no hay módulos)" value="" />}
            {names.map((name) => (
              <Picker.Item
                key={name}
                label={name.split('/').pop().replace('.js', '')}
                value={name}
              />
            ))}
          </Picker>
        </View>

        <Button
          title="Ingresar"
          onPress={() => {
            if (!selectedName) return;
            navigation.navigate('Run', { name: selectedName });
          }}
          disabled={!selectedName}
        />
      </View>
    </SafeAreaView>
  );
}

function getComponentFromModule(mod) {
  if (!mod) return null;
  if (typeof mod === 'function') return mod;
  if (mod && typeof mod.default === 'function') return mod.default;
  if (mod && typeof mod.Screen === 'function') return mod.Screen;
  if (mod && typeof mod.Component === 'function') return mod.Component;
  return null;
}

function RunScreen({ route, navigation }) {
  const { name } = route.params || {};
  const [mod, setMod] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [output, setOutput] = React.useState('');
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let mounted = true;
    setLoading(true);
    setOutput('');
    setError(null);

    try {
      const loader = MODULE_LOADERS[name];
      if (!loader) throw new Error('Module loader not found for ' + name);
      const imported = loader();
      if (mounted) {
        setMod(imported);
        setLoading(false);
      }
    } catch (err) {
      if (mounted) {
        setError(err.message);
        setLoading(false);
      }
    }
    return () => { mounted = false; };
  }, [name]);

  const callExport = async (key) => {
    setOutput('');
    setError(null);
    try {
      const value = key === 'default' && (typeof mod !== 'object' || mod === null) ? mod : mod[key];
      if (typeof value !== 'function') {
        setOutput(String(value));
        return;
      }
      const res = value();
      if (res && typeof res.then === 'function') {
        setOutput('Promise... esperando resultado');
        const awaited = await res;
        setOutput(String(awaited));
      } else {
        setOutput(String(res));
      }
    } catch (err) {
      setError('Error al llamar: ' + err.message);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}><Text style={styles.headerText}>{name}</Text></View>
        <View style={styles.center}><ActivityIndicator size="large" /><Text>Cargando módulo...</Text></View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}><Text style={styles.headerText}>{name}</Text></View>
        <View style={{ padding: 16 }}>
          <Text style={{ color: 'red' }}>Error: {error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  const ModuleComponent = getComponentFromModule(mod);
  if (ModuleComponent) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{name}</Text>
        </View>
        {/* Cambiado: usar ScrollView para permitir desplazamiento del contenido del módulo */}
        <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
          <ModuleComponent navigation={navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  }

  let exportKeys = [];
  if (mod && typeof mod === 'object') {
    exportKeys = Object.keys(mod);
    if ('default' in mod && !exportKeys.includes('default')) exportKeys.unshift('default');
  } else {
    exportKeys = ['default'];
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text style={styles.headerText}>{name}</Text></View>
      <ScrollView contentContainerStyle={styles.viewerContent}>
        <Text style={{ marginBottom: 8 }}>Exports:</Text>
        {exportKeys.map((key) => {
          const value = key === 'default' && (typeof mod !== 'object' || mod === null) ? mod : mod[key];
          const isFunction = typeof value === 'function';
          return (
            <View key={key} style={styles.exportBlock}>
              <Text style={styles.exportTitle}>{key} {isFunction ? '(function)' : ''}</Text>
              <Text style={styles.exportValue}>{isFunction ? 'Función importada. Pulsa "Llamar" para ejecutar.' : String(value)}</Text>
              <View style={{ marginTop: 6 }}>
                <Button title={isFunction ? 'Llamar' : 'Mostrar'} onPress={() => callExport(key)} />
              </View>
            </View>
          );
        })}
        <View style={{ marginTop: 12 }}>
          <Text style={{ fontWeight: '700' }}>Salida:</Text>
          <Text>{output}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Módulos' }} />
        <Stack.Screen name="Run" component={RunScreen} options={({ route }) => ({ title: route?.params?.name || 'Run' })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  menu: { padding: 16 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 12 },
  buttonWrapper: { marginBottom: 8 },
  header: { padding: 12, borderBottomWidth: 1, borderColor: '#ddd' },
  headerText: { fontSize: 18, fontWeight: '600' },
  viewerContent: { padding: 16 },
  exportBlock: { marginBottom: 12, padding: 8, borderWidth: 1, borderColor: '#eee', borderRadius: 6 },
  exportTitle: { fontWeight: '700' },
  exportValue: { color: '#333', marginTop: 4 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});