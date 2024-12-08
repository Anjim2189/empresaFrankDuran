// db.js
const { Pool } = require('pg');

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'Empresa_owner',        // Nombre de usuario de PostgreSQL
  host: 'ep-nameless-flower-a59va4el.us-east-2.aws.neon.tech',         // Servidor donde está la base de datos (localhost para tu máquina local)
  database: 'Empresa', // Nombre de la base de datos
  password: 'pAY7yelr0IHP', // Contraseña de tu usuario
  port: 5432,                // Puerto de conexión, el predeterminado es 5432*/
  ssl: {
    rejectUnauthorized: false, // Si es necesario para conexiones seguras
  }
});

module.exports = pool;
