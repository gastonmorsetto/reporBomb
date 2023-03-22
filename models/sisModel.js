module.exports = {
    obtener: function(conexion, funcion) {
        conexion.query('SELECT id,date_format(fecha,"%d/%m/%Y - %H:%i %p") as fecha,tipo,zona FROM datos', funcion);
    },

    insertar: function(conexion, datos, funcion) {
        var myDate = new Date();
        conexion.query('INSERT INTO datos (fecha,tipo, zona) VALUES (?,?,?)', [myDate, datos.nombre, datos.tipo], funcion);
    }
}