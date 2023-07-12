const express = require('express');
const equipoRuta = express.Router();

//Declarar un objeto
let Equipo = require('../models/Equipo');

//Agregar un equipo
equipoRuta.route('/new').post((req, res )=>{
    Equipo.create(req.body)
    .then((data) => {
        console.log('New team was add!');
        res.send(data);
    })
    .catch((err) => {
        console.log(err);
    });
});

//Obtener todos los equipos
equipoRuta.route('/all').get((req,res)=>{
    Equipo.find()
    .then((data)=>{
        res.send(data);
    })
    .catch((err)=>{
        console.error(err);
    });
});

//Obtener un solo equipo, por su ID
equipoRuta.route('/equipo/:id').get((req,res) => {
    Equipo.findById(req.params.id)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.error(err);
    });
});

//Actualizar un equipo
equipoRuta.route('/update/:id').put((req, res) => {
    Equipo.findByIdAndUpdate(req.params.id, {
        $set: req.body
    })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.error(err);
    });
})

//eliminar equipo
equipoRuta.route('/delete/:id').delete((req, res) => {
    Equipo.findByIdAndRemove(req.params.id)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        console.error(err);
    });
});

module.exports = equipoRuta;