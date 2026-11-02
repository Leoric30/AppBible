import { useState } from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

export default function SelectorLibro({ libros, seleccionado, onSeleccionar }) {
  const [abierto, setAbierto] = useState(false);

  const elegir = (libro) => {
    onSeleccionar(libro);
    setAbierto(false);
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.etiqueta}>Libro</Text>
      <Pressable style={estilos.campo} onPress={() => setAbierto(!abierto)}>
        <Text style={estilos.textoCampo}>
          {seleccionado ? seleccionado.name : 'Selecciona un libro'}
        </Text>
        <Text style={estilos.flecha}>{abierto ? '▲' : '▼'}</Text>
      </Pressable>

      {abierto && (
        <ScrollView style={estilos.lista} nestedScrollEnabled>
          {libros.map((libro) => (
            <Pressable
              key={libro.bookid}
              style={estilos.opcion}
              onPress={() => elegir(libro)}
            >
              <Text style={estilos.textoOpcion}>{libro.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    gap: 6,
  },
  etiqueta: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F1B2D',
  },
  campo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#9AA5B1',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FDFCF8',
  },
  textoCampo: {
    fontSize: 18,
    color: '#0F1B2D',
  },
  flecha: {
    fontSize: 16,
    color: '#08708C',
  },
  lista: {
    maxHeight: 200,
    borderWidth: 1,
    borderColor: '#9AA5B1',
    borderRadius: 8,
    backgroundColor: '#FDFCF8',
  },
  opcion: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E3E0D5',
  },
  textoOpcion: {
    fontSize: 17,
    color: '#0F1B2D',
  },
});
