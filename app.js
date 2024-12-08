const express = require('express');
const { Pool } = require('pg');
const path = require('path');
const pool = require('./db'); // Importamos la configuración de la base de datos
const port = 3000; // Puerto donde correrá el servidor

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
// Servir archivos estáticos (index.html y styles.css)
app.use(express.static(path.join(__dirname, 'public')));
// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
app.get('/empleados', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM empleados'); // Asegúrate de que "empleados" sea tu tabla
      const rows = result.rows;
  
      if (rows.length === 0) {
        return res.send(`
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Sin datos</title>
            <link rel="stylesheet" href="/styles.css">
          </head>
          <body>
            <header>
              <h1>No se encontraron datos</h1>
            </header>
            <main>
              <p>No hay registros en la tabla <strong>empleados</strong>.</p>
              <a href="/" class="btn">Volver al Inicio</a>
            </main>
            <footer>
              <p>&copy; 2024 Mi Proyecto</p>
            </footer>
          </body>
          </html>
        `);
      }
  
      // Generar tabla HTML si hay datos
      let table = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Lista de Empleados</title>
          <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
          <header>
            <h1>Lista de Empleados</h1>
          </header>
          <main>
            <table border="1" style="width: 80%; margin: 0 auto; border-collapse: collapse;">
              <thead>
                <tr>
                  ${Object.keys(rows[0]).map((key) => `<th>${key}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${rows
                  .map(
                    (row) =>
                      `<tr>${Object.values(row)
                        .map((value) => `<td>${value}</td>`)
                        .join('')}</tr>`
                  )
                  .join('')}
              </tbody>
            </table>
            <a href="/" class="btn" style="margin-top: 20px; display: inline-block;">Volver al Inicio</a>
          </main>
          <footer>
            <p>&copy; 2024 Mi Proyecto</p>
          </footer>
        </body>
        </html>
      `;
  
      res.send(table);
    } catch (err) {
      console.error(err); // Importante para depurar
      res.status(500).send('Error al obtener los datos de la base de datos');
    }
  });  

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
