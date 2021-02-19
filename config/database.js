const mysql = require('mysql');

var pool      =    mysql.createPool({
    connectionLimit : 20, //important
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'rays_database',
    debug    :  false
});


module.exports =pool;
