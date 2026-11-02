// Limpia el texto que devuelve la API:
// - cambia las etiquetas <br> por un espacio
// - quita cualquier otra etiqueta HTML
// - convierte espacios repetidos en uno solo
export function limpiarTexto(texto) {
  return String(texto ?? '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
