require('dotenv').config();

const express = require('express'),
  bodyParser = require('body-parser'),
  massive = require('massive'),
  session = require('express-session'),
  products = require('./products.json');

const { CONNECTION_STRING, PORT, SESSION_SECRET } = process.env;

const app = express();

app.use(bodyParser.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

massive(CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
    console.log('DB Connected');
  })
  .catch(err => console.log(err));

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(prod => prod.id === +req.params.id);
  res.send(product);
});

app.listen(PORT || 3010, () => console.log(`Hard to port ${PORT || 3010}`));
