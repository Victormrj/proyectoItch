const express = require('express');
// const { default: db } = require('./database/config');
require('dotenv').config();
const cors = require('cors');
const {db} = require('./database/config');

// var cors = require('cors')
// var app = express()

// console.log(process.env);

//Crear el servidor de express
const app = express();
// app.options('*', cors())

//Base de datos
 async function dbConnection(){
    try {

        await db.authenticate();
        console.log("DB online")

    } catch (error) {
        console.error('Error',error)
        // throw new Error(error);
    }
}

//CORS
app.use(cors())
// app.use(cors());

//Directorio Publico
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
app.use('/api/cuentaUser', require('./routes/cuentaUser'));
app.use('/api/herramientas', require('./routes/herramientas'));
app.use('/api/materiales', require('./routes/materiales'));
app.use('/api/equipos', require('./routes/equipos'));
app.use('/api/bajasEquipos', require('./routes/bajasEquipos'));
app.use('/api/herramientatemporal', require('./routes/herramientatemporal'));
// app.use('/api/materialtemporal', require('./routes/materialtemporal'));
app.use('/api/temporal', require('./routes/temporal'));
app.use('/api/mantenimiento', require('./routes/mantenimiento'));
app.use('/api/materialUsados', require('./routes/materialUsados'));




app.get('*',(req, res)=>{
    res.sendFile(__dirname + '/public/index.html')
})


//TODO: CRUD: Eventos

//Escucha peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT} `);
    dbConnection();
    // console.log(dbConnection);
});

