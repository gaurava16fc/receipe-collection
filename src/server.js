const express = require('express');
const expressLayouts = require('express-ejs-layouts');


const app = new express();

const PORT_NUMBER = process.env.PORT || 5051;

require('dotenv').config();
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes');
app.use('/', routes);

app.listen(PORT_NUMBER, () => {
    console.log(`Application server is up and running at http://localhost:${PORT_NUMBER}`);
});