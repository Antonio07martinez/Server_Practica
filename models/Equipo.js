const mongoose = require('mongoose');
const Schema = mongoose.Schema

let Equipo =  new Schema ({
    equipo: {
        type: String
    },
    division: { 
        type: String
    },
    liga: {
        type: String
    },
    goles_favor: {
        type: Number
    },
    goles_contra: {
        type: Number
    }
},
{
collection: 'equipos'
})

module.exports = mongoose.model('Equipo', Equipo)