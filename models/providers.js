const mongoose = require('mongoose');
require('../utils/db_mongo');

// Diseñamos esquema
const objectSchema = {
    company_name: {
        type: String,
        required: true,
        unique: true
    },
    CIF: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    url_web: {
        type: String,
        required: true
    }
}
// Creamos esquema
const providerSchema = mongoose.Schema(objectSchema);

// Crear el modelo
const Provider = mongoose.model('Provider', providerSchema);

// const newProvider = new Provider({
//     company_name: "La Bombilla",
//     CIF: "G46354655",
//     address: "Galera 3, 15001 - A Coruña, España",
//     url_web: "https://www.tripadvisor.es/Restaurant_Review-g187507-d2232488-Reviews-La_Bombilla-La_Coruna_Province_of_A_Coruna_Galicia.html"
// })

// newProvider.save().then((data)=>console.log(data));

module.exports = Provider;