const mongoose = require('mongoose');

let Schema = mongoose.Schema;  //creamos una clase Schema, S mayuscula

let clienteSchema = new Schema( //inicalizamos un objeto
    {
        nombre:{ type: String, required:[true, 'El nombre es necesario']},  //si es unico usamos , unique:[true,'mesaje de error en su caso']
        telefono:{ type: Number},
        correo:{ type: String},
        tipo:{ type: String, required:[true, 'El tipo de usuario es requerido']},
    }
);

module.exports = mongoose.model('esquemaCliente', clienteSchema);