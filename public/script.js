document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el contenedor 'app' existe
    const appContainer = document.getElementById('app');
    if (appContainer) {
      // Crear un párrafo con texto personalizado
      const paragraph = document.createElement('p');
      paragraph.textContent = 'HOLA DESDE JAVASCRIPT by Francisco';
      
      // Añadir el párrafo al contenedor 'app'
      appContainer.appendChild(paragraph);
    } else {
      console.error('No se encontró el contenedor con id "app".');
    }
  });
  
