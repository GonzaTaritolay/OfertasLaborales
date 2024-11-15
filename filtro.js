// Guarda todas las cartas al cargar la página
const todasLasCartas = Array.from(document.querySelectorAll('.carta'));
const contenedorCartas = document.getElementById('cartas');

// Función para filtrar las cartas
function filtrarCartas(categoria) {
  // Limpia el contenedor de cartas
  contenedorCartas.innerHTML = '';

  // Filtra las cartas según la categoría seleccionada
  const cartasFiltradas = todasLasCartas.filter(carta => {
    return categoria === '' || carta.getAttribute('data-categoria') === categoria;
  });

  // Añade solo las cartas que coinciden con el filtro
  cartasFiltradas.forEach(carta => {
    contenedorCartas.appendChild(carta);
  });
}
