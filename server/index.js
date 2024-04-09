const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json()); 
app.use(cors());  

app.get('/', (req, res) => {
    res.send("saludando desde el backend")
});

const user = require("./controller/userController");
app.use("/registro-usuario", user.register);

const PORT = 3001
    app.listen(PORT,()=>{
        console.log("servidor corriendo en el puerto",PORT) 
})

