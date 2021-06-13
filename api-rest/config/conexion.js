const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'bw4bwdd7tjrujmnqzfww-mysql.services.clever-cloud.com',
    user: 'uqmn7oxz7jtjhvp2',
    password: 'Dt6w1ei4lhaO2IZuhvfI',
    port: '3306',
    database: 'bw4bwdd7tjrujmnqzfww'
})

conexion.connect((err)=>{
    if(err) {
        console.log('Ha ocurrido un error: ' + err)
    } else {
        console.log('¡La base de datos se conectó!')
    }
});

module.exports = conexion;