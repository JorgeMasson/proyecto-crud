const router = require('express').Router()
const conexion = require('./config/conexion')

//-------------Se asignan rutas------------//
//get empleados
router.get('/', (req, res)=>{
    let sql = 'select * from tb_empleados'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else {
            res.json(rows)
        }
    })
})

//get un empleado
router.get('/:id', (req, res)=>{
    const {id} = req.params
    let sql = 'select * from tb_empleados where id_empleado = ?'
    conexion.query(sql, [id], (err, rows, fields)=>{
        if(err) throw err;
        else {
            res.json(rows)
        }
    })
})

//agregar empleado
router.post('/', (req, res)=>{
    const {nombre, curso} = req.body
    let sql = `insert into tb_empleados(nombre, curso) values('${nombre}', '${curso}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'empleado agregado'})
        }
    })
})

//eliminar empleado
router.delete('/:id', (req, res)=>{
    const {id} = req.params
    let sql = `delete from tb_empleados where id_empleado = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else {
            res.json({status: 'empleado eliminado'})
        }
    })
})

//modificar empleado
router.put('/:id', (req, res) => {
    const { id } = req.params
    const { nombre, curso } = req.body
    let sql = `update tb_empleados set 
                nombre = '${nombre}',
                curso = '${curso}'
                where id_empleado = '${id}'`
    conexion.query(sql, (err, rows, fields) => {
        if (err) throw err
        else {
            res.json({ status: 'empleado modificado' })
        }
    })
})

//-------------------------------------------

module.exports = router;