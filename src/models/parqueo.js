const mongoose = require("mongoose");

const parqueoSchema = mongoose.Schema({
    id:{
        type: Number
    },
    id_negocio:{
        type: Number
    },
    fecha:{
        type:Date
    },
    correlativo:{
        type: String
    }
});

module.exports = mongoose.model('parqueo_registro',parqueoSchema);