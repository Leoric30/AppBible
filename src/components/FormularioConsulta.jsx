import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import SelectorLibro from './SelectorLibro';

export default function FormularioConsulta({ modo, libros, cargando, onConsultar }) {
  const [libro, setLibro] = useState(null);
  const [capitulo, setCapitulo] = useState('');
  const [versiculo, setVersiculo] = useState('');
  const [errorForm, setErrorForm] = useState('');

  const validar = () => {
    if (!libro) {
      return 'Selecciona un libro.';
    }
    const numCapitulo = Number(capitulo);
    if (!Number.isInteger(numCapitulo) || numCapitulo < 1) {
      return 'Escribe un capítulo válido (número entero mayor a 0).';
    }
    if (numCapitulo > libro.chapters) {
      return `${libro.name} tiene ${libro.chapters} capítulos.`;
    }
    if (modo === 'versiculo') {
      const numVersiculo = Number(versiculo);
      if (!Number.isInteger(numVersiculo) || numVersiculo < 1) {
        return 'Escribe un versículo válido (número entero mayor a 0).';
      }
    }
    return '';
  };

  const enviar = () => {
    const mensaje = validar();
    setErrorForm(mensaje);
    if (mensaje !== '') {
      return;
    }
    onConsultar({
      libro,
      capitulo: Number(capitulo),
      versiculo: modo === 'versiculo' ? Number(versiculo) : null,
    });
  };

  return (
    <View style={estilos.contenedor}>
      <SelectorLibro
        libros={libros}
        seleccionado={libro}
        onSeleccionar={setLibro}
      />

      <Text style={estilos.etiqueta}>Capítulo</Text>
      <TextInput
        style={estilos.entrada}
        keyboardType="number-pad"
        placeholder={libro ? `1 a ${libro.chapters}` : 'Número de capítulo'}
        value={capitulo}
        onChangeText={setCapitulo}
      />

      {modo === 'versiculo' && (
        <>
          <Text style={estilos.etiqueta}>Versículo</Text>
          <TextInput
            style={estilos.entrada}
            keyboardType="number-pad"
            placeholder="Número de versículo"
            value={versiculo}
            onChangeText={setVersiculo}
          />
        </>
      )}

      {errorForm !== '' && <Text style={estilos.error}>{errorForm}</Text>}

      <Button
        title={cargando ? 'Consultando…' : 'Consultar'}
        onPress={enviar}
        disabled={cargando}
        color="#08708C"
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    gap: 10,
  },
  etiqueta: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0F1B2D',
  },
  entrada: {
    borderWidth: 1,
    borderColor: '#9AA5B1',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    backgroundColor: '#FDFCF8',
  },
  error: {
    fontSize: 16,
    color: '#B3261E',
  },
});
