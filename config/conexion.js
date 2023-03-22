const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'bomb',
    password: 'bomb123',
    port: 3200,
    database: 'sin_bomber'
}); 


con.connect((err) => {
    if(!err){
        console.log('Conexion Establecida');
    }else{
        console.log('Error de Conexion', err);
    }
});

module.exports = con;
