/* 
Conexion a postgres
npm install pg

*/

const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "db_joan",
    password: "Pg2825174*",
    port: 5432
})


const ejecutarQuery = async(query)=>{
    try{
        const res = await pool.query(query);
        console.log(res.rows);
        return res.rows;
    } catch (err){
        console.log(err);
    } finally{
        await pool.end();
    }
}

module.exports.ejecutarQuery=ejecutarQuery;
