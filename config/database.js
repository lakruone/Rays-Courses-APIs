// const mysql = require('mysql');
const Pool = require('pg').Pool;

// var pool = mysql.createPool({
//     connectionLimit : 20, //important
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'rays_database',
//     debug    :  false
// });

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database:  'rays_database',
    password: 'user@123',
    port:5432,
  })


module.exports =pool;
