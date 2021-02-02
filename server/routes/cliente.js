const express = require ('express');  //Requerimos la libreria express
let app= express(); //iniciamos

const EsquemaUsuario = require('../models/modelo-cliente.js');

app.get('/historial-cliente',(req,res)=>{
    let body= req.body;
    let cosa= req.query.cosa;
    
    console.log('Estamos dentro del get historial-usuario');
    res.send('Estamos dentro del get historial-usuario y su id es '+ body.id);
    //res.send('Estamos dentro del get historial-usuario y su id es '+ cosa);
});

app.get('/historial-cliente-completo',(req,res)=>{
    console.log('Estamos dentro del historial completo');
    res.send('Estamos dentro del historial completo');
});

app.post('/nuevo-cliente',(req,res)=>{
    let usuario = new EsquemaUsuario({
        nombre:'Primer nombre',
        telefono: 6854645,
        email:'cosa@mail.com',
        tipo:'Admin'
    });
    usuario.save((err,usuarioBD)=>{
        if(err)
        {
            return res.status(405).json({
                ok:false,
                mensaje: 'Ocurrio un error al guradar en la Base de datos',
            });
        }
        res.status(200).json({
            ok:true,
            usuarioBD
        });
    });
    
    res.send('Estamos en el post para nuevo usuario');
    console.log('Estamos en el post para nuevo usuario');
});

app.put('/actualizar-cliente',(req,res)=>{
    console.log('Estamos dentro put actualizar Usuario');
    res.send('Estamos dentro put actualizar Usuario');
});
app.delete('/borrar-cliente',(req,res)=>{
    console.log('Estamos dentro del delete borrar-usuario');
    res.send('Estamos dentro del delete borrar-usuario');
});

module.exports = app; 