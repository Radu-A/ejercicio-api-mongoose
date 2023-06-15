const mongoose = require('mongoose');
require('../utils/db_mongo');

// Diseñamos el esquema
const objectSchema = {
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true
    // },
    title: {
        type: String,
        required: true,
        unique: true
    },
    provider: {
        // Asociar el proveedor al ID de otro esquema nos permitirá usar populate
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Provider'
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        validate: {
            validator: function(url){
                if (url.indexOf('.jpg') != -1 || url.indexOf('.png') != -1) 
                    return true;
                else return false;
            },
            message: "Porfa, sólo imágenes JPG o PNG"
        }
    }
};
// Crear el esquema
const productSchema = mongoose.Schema(objectSchema);

// Crear el modelo --> Colección
const Product = mongoose.model('Product', productSchema);

// const newProduct = new Product({
//         // id: 4,
//         title: "Croqueta",
//         price: 1.80,
//         description: "Jamón",
//         image:"https://www.recetasderechupete.com/wp-content/uploads/2020/11/Tortilla-de-patatas-4-768x530.jpg"
//     });

// newProduct.save().then((data)=>console.log(data));

module.exports = Product;