import { View, Text, StyleSheet } from 'react-native';

export default function TarjetaVersiculo({ referencia, texto }) {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.referencia}>{referencia}</Text>
      <Text style={estilos.texto}>{texto}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#0F1B2D',
    borderRadius: 12,
    padding: 20,
    gap: 8,
  },
  referencia: {
    fontSize: 18,
    fontWeight: '700',
    color: '#F2C14E',
  },
  texto: {
    fontSize: 20,
    lineHeight: 28,
    color: '#F6F4EE',
  },
});
