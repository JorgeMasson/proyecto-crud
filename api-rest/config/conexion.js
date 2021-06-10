const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hcpk8546',
    port: '3306',
    database: 'db_crud'
})

conexion.connect((err)=>{
    if(err) {
        console.log('Ha ocurrido un error: ' + err)
    } else {
        console.log('¡La base de datos se conectó!')
    }
});

module.exports = conexion;