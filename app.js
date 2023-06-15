const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

const providersRouter = require('./routes/providersRoutes');
const productsRouter = require('./routes/productsRoutes');

app.use(morgan('dev'));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', async (req, res) => {
    res.render('home');
})
app.use('/api/providers', providersRouter);
app.use('/api/products', productsRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})