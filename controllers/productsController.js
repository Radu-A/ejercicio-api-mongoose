const mongoose = require('mongoose');
const Product = require('../models/products');
const { ObjectId } = require('mongodb');
const Provider = require('../models/providers');
require('../utils/db_mongo');

const getProducts = async (req, res) => {
    if (req.params.CIF) {
        try {
            const provider = await Provider.find({CIF: req.params.CIF}, '-__v');
            const data = await Product.find({provider: provider[0]._id}, '-_id -__v').populate('provider').exec();
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json({
                "Error": `${error}`
            })
            console.log(error);
        }
    } else {
        try {
            const data = await Product.find({}, '-_id -__v').populate('provider').exec();
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json({
                "Error": `${error}`
            })
            console.log(error);
        }
    }
}

// { 
//     "title": "Prueba POST products con CIF 2", 
//     "providerCIF": "G564354622",
//     "price": 15,
//     "description": "Provider Amorodos G564354622",
//     "image": "planta.jpg"
// }

const createProduct = async (req, res) => {
    try {
        const { title, providerCIF, price, description, image } = req.body;
        const provider = await Provider.find({CIF: providerCIF}, '-__v');
        console.log(provider[0]._id);
        const newProduct = new Product({
                    title: title,
                    provider: provider[0]._id,
                    price: price,
                    description: description,
                    image: image,
                })
    try {
            const data = await newProduct.save();
            res.status(201).json({"message": "producto creado", "product":`${newProduct.title}`});
        } catch (error) {
            res.status(404).json({
                "Error": `${error}`
            })
            console.log(error);
        }
    } catch (error) {
        res.status(404).json({
            "Mensssage": "El CIF proporcionado no existe en la base de datos",
            "Error": `${error}`
        })
        console.log(error);
    }
}

module.exports = {
    getProducts,
    createProduct
};