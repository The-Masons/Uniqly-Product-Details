const express = require('express');
let app = express();
var parser = require('body-parser');

app.use(parser.text());
app.use(parser.json());
app.use(express.static(__dirname + '/../client'));

app.get('/products/:productid', function (req, res) {
  console.log(req.params);
});

let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});