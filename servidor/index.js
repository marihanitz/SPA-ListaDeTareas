const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//Servidor
const app = express();

conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/Listadetareas', require('./routes/tarea'));

app.listen(4000,() =>{
    console.log("servidor listo");
})