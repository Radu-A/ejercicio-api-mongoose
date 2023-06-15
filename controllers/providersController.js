const mongoose = require('mongoose');
const Provider = require('../models/providers')
require('../utils/db_mongo');

const getProviders = async (req, res) => {
    if (req.params.CIF) {
        try {
            const data = await Provider.find({CIF: req.params.CIF}, '-__v');
            res.status(200).json(data[0]);
            console.log(data[0]._id);
        } catch (error) {
            res.status(404).json({
                "Error": `${error}`
            })
            console.log(error);
        }
    } else {
        try {
            const data = await Provider.find({}, '-__v');
            res.status(200).json(data);
        } catch (error) {
            res.status(404).json({
                "Error": `${error}`
            })
            console.log(error);
        }
    }
}

const createProvider = async (req, res) => {
    const { company_name, CIF, address, url_web } = req.body;
    const newProvider = new Provider({
        company_name,
        CIF,
        address,
        url_web
    }) 
    try {
        const data = await newProvider.save();
        res.status(201).json({"message": "proveedor creado", "product":`${newProvider.company_name}`});
    } catch (error) {
        res.status(400).json({
            "Error": `${error}`
        })
        console.log(error);
    }
}

module.exports = {
    getProviders,
    createProvider
}