module.exports = {
    obtener: function(conexion, funcion) {
        conexion.query('SELECT * FROM datos', funcion);
    },

    insertar: function(conexion, datos, funcion) {
        conexion.query('INSERT INTO datos (tipo, zona) VALUES (?,?)', [datos.nombre, datos.tipo], funcion);
    }
}