const express = require ('express');  //Requerimos la libreria express
let app= express(); //iniciamos

app.use(require('./cliente.js')); //requerimos cliente que exporta su app con sus servicio, lo agregamos a este app y lo exportamos para que lo use el sevidor.

module.exports = app;