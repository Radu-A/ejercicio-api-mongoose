db.providers.insertMany([{
    "company_name": "Amorodos",
    "CIF": "G564354622",
    "address": "Orzán, 2",
    "url_web":"https://www.amorodos.com"
},
{
    "company_name": "Piadina",
    "CIF": "G47584764",
    "address": "PLaza Lugo, 2",
    "url_web":"https://www.amorodos.com"
},
{
    "company_name": "De Abejas",
    "CIF": "U46374655",
    "address": "Olmos, 8",
    "url_web":"https://www.deabejas.com"
}])

db.products.insertMany([{
    "title": "Helecho",
    "price": 5.80,
    "description":"Helecho colgante, poca luz",
    "provider": ObjectId("6488ae780602c2c8d8596cbf")
},
{
    "title": "Trozo pizza",
    "price": 2.80,
    "description":"Pizza al corte, horno de leña",
    "provider": ObjectId("6488af0b0602c2c8d8596cc0")
},
{
    "title": "Raxo al cabrales",
    "price": 10.80,
    "description":"Ración de raxo con patatas y salsa de queso cabrales",
    "provider": ObjectId("6488af0b0602c2c8d8596cc1")
}])