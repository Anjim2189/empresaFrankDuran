document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el contenedor 'app' existe
    const appContainer = document.getElementById('app');
    if (appContainer) {
      // Crear un párrafo con texto personalizado
      const paragraph = document.createElement('p');
      paragraph.textContent = 'Este es un párrafo cargado dinámicamente desde script.js.';
      
      // Añadir el párrafo al contenedor 'app'
      appContainer.appendChild(paragraph);
    } else {
      console.error('No se encontró el contenedor con id "app".');
    }
  });
  