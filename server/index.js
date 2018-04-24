const express = require('express');
let app = express();
const parser = require('body-parser');
const db = require('../models/db.js');


app.use(parser.text());
app.use(parser.json());
app.use(express.static(__dirname + '/../client'));

let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.get('/products/:productid', function (req, res) {
  const query = `SELECT products.id, colors.name AS color, products.description, products.material, ratings.rating AS reviewScore, ratings.rating_count AS reviewcount, names.name AS product_name, products.price, products.sku
    FROM products 
    JOIN colors ON products.color_id = colors.id
    JOIN names ON products.name_id = names.id
    JOIN ratings ON products.id = ratings.product_id
    WHERE products.id = ${req.params.productid}`
  db.query(query, (err, data) => {
    if(err){
      console.log('err', err);
      res.end();
    } else {
      data = JSON.stringify(data.rows[0]);
      console.log('data', data);
      res.end(data);      
    }
  });
});

app.get('/products/:productid/images', function (req, res) {
  const query = `SELECT images.img_url FROM images JOIN names ON names.id = images.name_id JOIN products ON products.name_id = names.id WHERE products.id = ${req.params.productid}`
  db.query(query, (err, data) => {
    if(err){
      console.log('err', err);
      res.end();
    } else {
      data = JSON.stringify(data.rows);
      console.log('data', data);
      res.end(data);      
    }
  });
})

app.get('/products/:productid/colors', function (req, res) {
  const query = `SELECT * FROM product_colors JOIN colors ON colors.id = product_colors.color_id WHERE product_colors.product_id = ${req.params.productid}`
  db.query(query, (err, data) => {
    if(err){
      console.log('err', err);
      res.end();
    } else {
      data = JSON.stringify(data.rows);
      console.log('data', data);
      res.end(data);      
    }
  });
})