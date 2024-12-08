// db.js
const { Pool } = require('pg');

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: 'postgres',        // Nombre de usuario de PostgreSQL
  host: '@ep-nameless-flower-a59va4el.us-east-2.aws.neon.tech/Empresa?sslmode=require',         // Servidor donde está la base de datos (localhost para tu máquina local)
  database: 'Empresa', // Nombre de la base de datos
  password: '5565', // Contraseña de tu usuario
  port: 5432,                // Puerto de conexión, el predeterminado es 5432
});

module.exports = pool;
