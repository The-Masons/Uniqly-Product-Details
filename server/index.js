const express = require('express');
let app = express();
const parser = require('body-parser');
const db = require('../models/db.js');
const path = require('path');

const HOST = process.env.DB_HOST || 'http://localhost';
const PORT = process.env.DB_PORT || '3003';

app.use(parser.text());
app.use(parser.json());
app.use(express.static(__dirname + '/../client'));

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

app.get('/product/:productid', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', `*`);
  res.setHeader('Content-Type', 'text/html');
  res.send(constructHtmlDoc());
  res.end();
})

const constructHtmlDoc = () => {
  return `<!DOCTYPE html>
  <html>
  <head>
    <title>Uniqly Product Details</title>
    <link href="https://fonts.googleapis.com/css?family=Yantramanav:900" rel="stylesheet">
    <link rel="stylesheet" href="${HOST}:${PORT}/style.css"/>
  </head>
    <body>
      <div class="product-images" id="product-images"></div>
      <div class="product-details" id="product-details"></div>
      <script type="text/javascript" src="${HOST}:${PORT}/bundle.js"></script>
    </body>
  </html>`
}

app.get('/productdetails/:productid', function (req, res) {
  const query = `SELECT products.id, colors.name AS color, products.description, products.material, ratings.rating AS reviewScore, ratings.rating_count AS reviewcount, names.name AS product_name, products.price, products.sku
    FROM products 
    JOIN colors ON products.color_id = colors.id
    JOIN names ON products.name_id = names.id
    JOIN ratings ON products.id = ratings.product_id
    WHERE products.id = ${req.params.productid}`
  db.query(query, (err, data) => {
    if(err){
      console.log('err', err);
      res.setHeader('Access-Control-Allow-Origin', `*`);
      res.end();
    } else {
      data = JSON.stringify(data.rows[0]);
      console.log('data', data);
      res.setHeader('Access-Control-Allow-Origin', `*`);
      res.end(data);      
    }
  });
});

app.get('/product/:productid/images', function (req, res) {
  const query = `SELECT images.img_url FROM images JOIN names ON names.id = images.name_id JOIN products ON products.name_id = names.id WHERE products.id = ${req.params.productid}`
  db.query(query, (err, data) => {
    if(err){
      console.log('err', err);
      res.setHeader('Access-Control-Allow-Origin', `*`);
      res.end();
    } else {
      data = JSON.stringify(data.rows);
      console.log('data', data);
      res.setHeader('Access-Control-Allow-Origin', `*`);
      res.end(data);      
    }
  });
})

app.get('/product/:productid/colors', function (req, res) {
  const query = `SELECT * FROM product_colors JOIN colors ON colors.id = product_colors.color_id WHERE product_colors.product_id = ${req.params.productid}`
  db.query(query, (err, data) => {
    if(err){
      console.log('err', err);
      res.setHeader('Access-Control-Allow-Origin', `*`);
      res.end();
    } else {
      data = JSON.stringify(data.rows);
      console.log('data', data);
      res.setHeader('Access-Control-Allow-Origin', `*`);
      res.end(data);      
    }
  });
})