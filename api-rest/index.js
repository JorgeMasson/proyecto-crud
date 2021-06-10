require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

//express
const app = express();

//admitir
app.use(express.json())

//config
app.set('port', port);

//rutas
app.use('/api', require('./rutas'))

//inicializar express
app.listen(app.get('port'),(err)=>{
    if(err) {
        console.log('Error al iniciar servidor: ' + err)
    } else {
        console.log('Servidor iniciado en el puerto: ' + port)
    }
})