const express = require('express');
const pool = require('./db'); // Importamos la configuración de la base de datos

const app = express();
const port = 3000; // Puerto donde correrá el servidor

// Ruta para obtener los datos de una tabla
app.get('/api/datos', async (req, res) => {
  try {
    // Realizamos una consulta a la base de datos para obtener los datos de una tabla
    const result = await pool.query('SELECT * FROM empleados'); // Cambia 'tu_tabla' por el nombre de tu tabla

    // Enviamos los resultados como respuesta en formato JSON
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener los datos:', err);
    res.status(500).json({ error: 'Hubo un error al obtener los datos' });
  }
});

// Iniciar el servidor en el puerto definido
app.listen(port, () => {
  console.log('Servidor corriendo en http://localhost:${port}');
});