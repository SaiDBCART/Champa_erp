'user strict';
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'champa_erp',
    multipleStatements: true
});
module.exports=connection;
