let puerto = process.env.PORT || 3000;
const express = require ('express');  //Requerimos la libreria express
let app= express(); //iniciamos
//Paquete necesario para poder requerir parametros urlencoded
let bodyParser= require('body-parser');
let mongoose = require('mongoose'); //importamos para la coneccion

//requerimientos requieres todos los archivos con servicios y loes exporta
app.use(require('./routes/requerimientos.js'));

//requerimos los paquetes para poder leer parametros urlenconded (req.body.nomParametro), para los pasados por url no es necesario(req.query.nombre), debe instalarse con npm i body-parser --save
app.use(bodyParser.urlencoded({ extended: false }));

process.env.NODE_ENV = (!process.env.NODE_ENV)? 'dev': process.env.NODE_ENV;
//Coneccion con la base de datos
if(process.env.NODE_ENV === 'dev') //Para usarlo en la conexión ya sea local o remota
{
    console.log('Estoy en desarrolo');
    process.env.URLDB = 'mongodb://localhost:27017/reposteria';
}else{
    console.log('Estoy en producción');
    process.env.URLDB = process.env.MONGO_URI;
}

mongoose.connect(process.env.URLDB, {  //Es el puerto y la ruta a la BD, así como el nombre
    useNewUrlParser: true,  //Ent la pagina según para usar las nuevas conexiones
    useUnifiedTopology:true,
    useCreateIndex: true
  },
  (err, res)=>{
    if(err) throw err; //Si el error existe, diferente de undefined, lo lanza
    //Si no existe el error continua con la ejecución
    console.log('Base de Datos online');
  });

app.listen(puerto, (err)=>{
    if(err)
    {
        console.log("Tenemos un error al conectar");
        throw error;
    }
    console.log(`Conectado a la BD en el puerto ${puerto}`);
    
} );
