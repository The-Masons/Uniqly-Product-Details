const db = require('./db.js');

const productCount = 100;
const colorCount = 4;
const sizes = ['small', 'medium', 'large', 'extra large'];
const sex = ["Men's", "Women's"];
const modifiers = ['camo', 'cargo', 'khaki', 'denim', 'plaid', 'corduroy'];
const clothingType = ['shirt', 'dress', 'pants', 'shorts', 'skirt', 'tank top', 'socks'];
const maxRating = 5;
const colors = ['red', 'green', 'blue', 'yellow', 'grey', 'black', 'white'];
const skuLength = 7;


populateDBWithRandomData = () => {
  populateColorTable();
  populateNameTable();
  populateProductTable();
  populateImageTable();
  populateSizeTable();
  populateRatingsTable();
}

clearDB = () => {
  db.query('delete from colors where id >= 0');
  db.query('delete from names where id >= 0');
  db.query('delete from products where id >= 0');
  db.query('delete from images where id >= 0');
  db.query('delete from ratings where id >= 0');
  db.query('delete from sizes where id >= 0');
}

populateColorTable = () => {
  for(var i = 0; i < colors.length; i++) {
    const text = 'INSERT INTO colors VALUES ($1, $2, $3)';
    const values = [i, colors[i], `https://source.unsplash.com/30x15/?${colors[i]}`];
    db.insert(text, values, (err, data) => {
      console.log(err, data);
    });
  }
}

populateRatingsTable = () => {
  for(var i = 0; i < productCount; i++) {
    const text = 'INSERT INTO ratings VALUES ($1, $2, $3)';
    const values = [i, Math.floor(Math.random() * maxRating), i];
    db.insert(text, values, (err, data) => {
      console.log(err, data);
    });
  }
}

populateSizeTable = () => {
  for(var i = 0; i < sizes.length; i++) {
    const text = 'INSERT INTO sizes VALUES ($1, $2)';
    const values = [i, sizes[i]];
    db.insert(text, values, (err, data) => {
      console.log(err, data);
    });
  }
}

populateNameTable = () => {
  for(var i = 0; i < productCount; i++) {
    var name = getRandomProductName();
    const text = 'INSERT INTO names VALUES ($1, $2)';
    const values = [i, name];
    db.insert(text, values, (err, data) => {
      console.log(err, data);
    });
  }
}

populateProductTable = () => {
  for(var i = 0; i < productCount; i++) {
    const name = getRandomProductName();
    const text = 'INSERT INTO products VALUES ($1, $2, $3, $4, $5, $6, $7)';
    const sku = getRandomSku();
    const values = [i, Math.floor(Math.random() * productCount), Math.floor(Math.random() * colors.length), Math.floor(Math.random() * 500), 'lorem ipsum', 'diet coke', sku];
    db.insert(text, values, (err, data) => {
      console.log(err, data);
    });
  }
}

populateImageTable = () => {
  for(var i = 0; i < productCount; i++) {
    let imageCount = Math.floor(Math.random() * 8);
    imageCount = imageCount < 1 ? 1 : imageCount;
    for (var j = 0; j < imageCount; j++) {
      const text = 'INSERT INTO images VALUES ($1, $2, $3, $4, $5)';
      const colInd = Math.floor(Math.random() * colors.length);
      const values = [i, `https://source.unsplash.com/557x557/?${colors[colInd]}`, colInd, Math.floor(Math.random() * productCount), true];
      db.insert(text, values, (err, data) => {
        console.log(err, data);
      });
    }
  }
}

GenerateRandomProduct = () => {
  let product = {};
  product.name = getRandomProductName();
  product.colors = getRandomColors(Math.floor(Math.random() * 5));
  product.price = Math.floor(Math.random() * 50000);
  product.description = 'this is the description';
  product.material = 'this is the material';
  return product;
}

getRandomProductName = () => {
  let result = '';
  result += sex[Math.floor(Math.random() * sex.length)];
  result += ' ' + modifiers[Math.floor(Math.random() * modifiers.length)];
  result += ' ' + clothingType[Math.floor(Math.random() * clothingType.length)];
  return result;
}

getRandomColors = (count) => {
  let result = [];
  for(var i = 0; i < count; i++) {
    let index = 0;
    do{
      index = Math.random() * colors.length
    }while(result.includes(colors[index]))
    result.push(colors[index]);
  }
  return result;
}

getRandomSku = () => {
  let result = ''
  for(var i = 0; i < skuLength; i++) {
    if(i === 0 || Math.random() > 0.5) {
      result += String.fromCharCode(Math.floor(Math.random() * 26 + 70));
    } else {
      result += Math.floor(Math.random() * 10);
    }
  }
  return result;  
}

clearDB();
populateDBWithRandomData();