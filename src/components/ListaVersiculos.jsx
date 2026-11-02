import { View, Text, FlatList, StyleSheet } from 'react-native';
import { limpiarTexto } from '../utils/texto';

export default function ListaVersiculos({ titulo, versiculos }) {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <FlatList
        data={versiculos}
        keyExtractor={(item) => String(item.pk)}
        contentContainerStyle={estilos.contenido}
        renderItem={({ item }) => (
          <View style={estilos.fila}>
            <Text style={estilos.numero}>{item.verse}</Text>
            <Text style={estilos.texto}>{limpiarTexto(item.text)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    gap: 8,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#08708C',
  },
  contenido: {
    paddingBottom: 24,
  },
  fila: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 6,
  },
  numero: {
    width: 28,
    fontSize: 16,
    fontWeight: '700',
    color: '#08708C',
  },
  texto: {
    flex: 1,
    fontSize: 18,
    lineHeight: 26,
    color: '#0F1B2D',
  },
});
