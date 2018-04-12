const express = require('express');
let app = express();
var parser = require('body-parser');

app.use(parser.text());
app.use(parser.json());
app.use(express.static(__dirname + '/../client'));

app.post('/', function (req, res) {

});

app.get('/', function (req, res) {

});

let port = 3003;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});