const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios'); 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json()); 
app.use(cors());  


app.get('/', (req, res) => {
    //res.send("saludando desde el backend")
    let config = {
        method: "GET",
        //maxBodyLength: Infinity,
        url: 'https://api.jsonbin.io/v3/b/6654d653acd3cb34a84e8a8d',
        headers: {
          'Content-Type': 'application/json',
          "X-Master-Key": "$2a$10$NJqqXp1XvTNOsxGDxucB7.JbP0I51Wna7JNHVurUk9Y9vllQiGby2"
        }
    };
    axios(config)
        .then(result =>{
            res.send(result.data.record)
        })
});  

const user = require("./controller/userController");
app.post("/registro-usuario", user.register);
//app.use("/login", user.login);

const PORT = 3001
    app.listen(PORT,()=>{
        console.log("servidor corriendo en el puerto",PORT);
});

//Solicitamos la conexión a la BD
const conexion = require('./configDB/configDB')
app.get("/todos-los-Usuarios", (req, res) => {
    conexion.connect(function (err) {
    if (err) throw err;
    //Select all customers and return the result object:
    conexion.query("SELECT * FROM sql10716116.usuario", function (err, result, fields) {
    if (err) throw err;
    res.send(result)
    });
    });
})

