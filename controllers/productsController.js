const mongoose = require('mongoose');
const Product = require('../models/products');
const { ObjectId } = require('mongodb');
const Provider = require('../models/providers');
require('../utils/db_mongo');

const getProducts = async (req, res) => {
    if (req.params.id) {
        try {
            const data = await Product.find({provider: req.params.id}, '-_id -__v').populate('provider').exec();
            res.status(200).json(data);
        } catch (error) {
            console.log(error);
        }
    } else {
        try {
            const data = await Product.find({}, '-_id -__v').populate('provider').exec();
            res.status(200).json(data);
        } catch (error) {
            res.status(400).json({
                "Error": `${error}`
            })
            console.log(error);
        }
    }
}

// { 
//     "title": "Monstera", 
//     "provider": "6488ae780602c2c8d8596cbf",
//     "price": 15,
//     "description": "Costilla de Adán de tamaño mediano",
//     "image": "planta.jpg"
// }

const createProduct = async (req, res) => {
    // No consigo realizar la condicion adecuada para dar con un body vacío
    if (req.body === {}) {
        const { title, provider, price, description, image } = req.body;
        const newProduct = new Product({
                    title: title,
                    provider: provider,
                    price: price,
                    description: description,
                    image: image,
                })
        try {
            const data = await newProduct.save();
            res.status(201).json({"message": "producto creado", "product":`${newProduct.title}`});
        } catch (error) {
            res.status(400).json({
                "Error": `${error}`
            })
            console.log(error);
        }
    } else {
        res.status(400).send('Error: el cuerpo de la petición está vacío')
    }

}

module.exports = {
    getProducts,
    createProduct
};