const express = require('express')
const mysql = require('mysql');
const bodyParser = require('body-parser');



const app = express()

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','*')
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use(bodyParser.json())

const puerto = 3000




const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'jobba',
});

app.listen(puerto, ()=> {
    console.log(`Servidor corriendo en el puerto: ${puerto}`);
})
connection.connect((err)=>{
    if(err){
        console.log("error al conectarse a la base de datos: "+err.message);

    }else{
        console.log('Conexion exitosa!');
    }

});
app.get('/',(req,res)=>{
    res.send('API')
})

app.get('/usuario/:id', (req, res) => {
    const { id } = req.params
    const query = `SELECT * FROM usuario WHERE id_usuario=${id}`
    connection.query(query, (err, resultado) => {
        if (err) {
            console.log(err.message);
            
        }
        if (resultado != 0) {
            res.json(resultado);
            
        }else{
            res.json('No existe un usuario con este id')
        }
        //res.json(resultado);
        //console.log(resultado);

    
        
    })
})

app.post('/usuario/registrar', (req, res) => {
    const usuarios = {
        correo_electronico: req.body.correo_electronico,
        password: req.body.password,
        primer_nombre: req.body.primer_nombre,
        telefono: req.body.telefono,
        img_perfil: req.body.img_perfil,
        fecha_creacion: req.body.fecha_creacion,
        fecha_nacimiento: req.body.fecha_nacimiento
    }
    const query = `INSERT INTO usuario SET ?`
    connection.query(query, usuarios, (error) => {
        if(error){
            console.log(error.message);
        }
        res.json('Se registró correctamente')
    })
})

