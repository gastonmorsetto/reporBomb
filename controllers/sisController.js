const connexion = require('../config/conexion');
const sisModel = require('../models/sisModel');

module.exports = {

    index: function(req, res) {

        sisModel.obtener(connexion, function(err, data) {
            console.log(data);
            res.render('sis/sis', { sist: data });
        });
    },
    guardar:function(req, res) {
        console.log(req.body);

        sisModel.insertar(connexion, req.body, function(err, data) {
            res.redirect('/sis');
        });
    }

}