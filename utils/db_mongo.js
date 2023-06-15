const mongoose = require("mongoose");
require('dotenv').config();


// mongoose.connect("mongodb://localhost:27017/local");
mongoose.connect(`mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASS}@cluster0.lhlyvrl.mongodb.net/`)
    .catch(error => handleError(error)); // Manejo de error recomendado por la documentacion

const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("Estás conectado a MongoDB"));

module.exports = mongoose;