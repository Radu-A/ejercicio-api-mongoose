# API SQL

Aplicación que permite al usuario realizar métodos GET y POST que aplican cambios sobre una base de datos MongoDB.

## Tabla de contenidos

- [Objetivo](#objetivo)
  - [Endpoints](#endpoints)
  - [Links](#links)
- [Proceso](#Proceso)
  - [Construido con](#construido-con)
  - [Puntos clave](#puntos-clave)

## Objetivo

- Podrán realizarse 4 consultas a través de solicitudes GET: ver todos los productos, ver todos las entradas, buscar un proveedor por su CIF o buscar todos los productos de un proveedor por su CIF.
- Podrán introducirse nuevos proveedores y nuevos productos a través de solicitudes POST.

### Endpoints

GET
- Para obtener todas los productos: https://api-mongoose.onrender.com/api/products
- Para obtener los productos de un proveedor: https://api-mongoose.onrender.com/api/products/<CIF>
- Para obtener todos los proveedores: https://api-mongoose.onrender.com/api/providers
- Para obtener un proveedor por su CIF: https://api-mongoose.onrender.com/api/providers/<CIF>

POST
- Crear un nuevo proveedor: https://api-mongoose.onrender.com/api/providers. En el body se incluirá:
{
    "company_name": "",
    "CIF": "",
    "address": "",
    "url_web":""
}
- Crear un nuevo producto: https://api-sql-mmm3.onrender.com/api/entries. En el body se incluirá:
{ 
    "title": "", 
    "providerCIF": "",
    "price": ,
    "description": "",
    "image": ""
}

### Links

- Repositorio: [ejercicio-api-mongoose](https://github.com/Radu-A/ejercicio-api-mongoose)
- Live Site: [Demo](https://api-mongoose.onrender.com/)

## Proceso

### Construido con

- Javascript
- Node
- Express
- Docker y MongoDb Compass en fase de desarrollo
- Atlas
- Render

### Puntos clave

- Creación de base de datos y de las colecciones correspondientes
- Relacionar los dos colecciones a traves de los "Schemas" pertenecientes a Mongoose
- Conexión a la base de datos desde express mediante los módulos proporcionados por Mongoose
- Emplear el método "populate" de mongoose para traer los datos del proveedor junto con el producto
- Subdivisión de módulos propios para ordenar el código de la app
- Enrutamiento y empleo de middlewares
- Uso de morgan para visualizar logs
- Despliegue de la base de datos en Atlas
- Despliegue de la aplicación en Render