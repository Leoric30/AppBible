// Acceso a la API REST de bolls.life (traducción Reina-Valera 1960).
const BASE = 'https://bolls.life';
const TRADUCCION = 'RV1960';

// Función auxiliar: pide una ruta y devuelve el JSON.
async function pedirJSON(ruta) {
  const respuesta = await fetch(`${BASE}${ruta}`);
  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status} al consultar el servicio`);
  }
  return await respuesta.json();
}

// Devuelve [{ bookid, chronorder, name, chapters }, ...] (66 libros).
export function obtenerLibros() {
  return pedirJSON(`/get-books/${TRADUCCION}/`);
}

// Devuelve [{ pk, verse, text }, ...] con todos los versículos del capítulo.
export function obtenerCapitulo(libroId, capitulo) {
  return pedirJSON(`/get-text/${TRADUCCION}/${libroId}/${capitulo}/`);
}

// Devuelve { pk, verse, text } con un solo versículo.
export function obtenerVersiculo(libroId, capitulo, versiculo) {
  return pedirJSON(
    `/get-verse/${TRADUCCION}/${libroId}/${capitulo}/${versiculo}/`
  );
}
