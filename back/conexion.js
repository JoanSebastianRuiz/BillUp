/* 
Conexion a postgres
npm install pg

*/

const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "billup",
    password: "tebas1998",
    port: 5432
})


const ejecutarQuery = async(query, params = [])=>{
    try{
        const res = await pool.query(query,params);
        console.log(res.rows);
        return res.rows;
    } catch (err){
        console.log(err);
        return [];
    }
}

const finalizarPool = async () => {
  await pool.end();
  console.log("Pool cerrado");
}

module.exports.ejecutarQuery=ejecutarQuery;
module.exports.finalizarPool=finalizarPool;


/* const mysql = require('mysql2/promise');

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',      // Cambia a tu host de MySQL
      user: 'campus2023',           // Cambia a tu usuario de MySQL
      password: 'campus2023', // Cambia a tu contraseña
      database: 'billup' // Cambia al nombre de tu base de datos
    });

    console.log('Conexión exitosa a la base de datos');
    return connection;
  } catch (err) {
    console.error('Error conectando a la base de datos:', err.message);
    throw err;
  }
}

async function ejecutarQuery(query) {
    try {
      const connection = await connectToDatabase();
      
      // Hacer una consulta a la base de datos
      const [rows, fields] = await connection.execute(query);

      console.log('Resultados de la consulta:', rows);

      // Cerrar la conexión después de usarla
      await connection.end();
      return rows;

    } catch (err) {
      console.error('Error ejecutando la consulta:', err.message);
    }
  }

  module.exports.ejecutarQuery=ejecutarQuery; */