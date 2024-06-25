const mysql =  require('mysql2')
const connection = mysql.createConnection({
	host: "sql10.freesqldatabase.com",
	user: "sql10716116",
	password: "9EmbIFqmWQ",
	database: "sql10716116",
	port: 3306,
})

connection.connect((error) =>{
	if(!error){
        console.log("Conexion exitosa")
    }else{ 
        console.log("Conexión fallida")
    }		
})

module.exports = connection
