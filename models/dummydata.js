const db = require('./db.js');

const productCount = 100;
const colorCount = 4;
const sizes = ['small', 'medium', 'large', 'extra large'];
const sex = ["Men's", "Women's"];
const modifiers = ['camo', 'cargo', 'khaki', 'denim', 'plaid', 'corduroy', 'striped', 'classic fit', 'relaxed'];
const clothingType = ['shirt', 'dress', 'pants', 'shorts', 'skirt', 'tank top', 'socks'];
const maxRating = 5;
const colors = ['red', 'green', 'blue', 'yellow', 'grey', 'black', 'white'];
const skuLength = 7;


populateDBWithRandomData = () => {
  populateColorTable(() => {
  });
  populateNameTable(() => {
  });
  populateProductTable(() => {
  });
  populateImageTable(() => {
  });
  populateSizeTable(() => {
  });
  populateRatingsTable(() => {
  });
  populateProdColorTable(() => {
  });
  populateProdSizeTable(() => {
    return;
  });
}

clearDB = () => {
  db.query('delete from colors where id >= 0');
  db.query('delete from names where id >= 0');
  db.query('delete from products where id >= 0');
  db.query('delete from images where id >= 0');
  db.query('delete from ratings where id >= 0');
  db.query('delete from sizes where id >= 0');
  db.query('delete from product_sizes where id >= 0');
  db.query('delete from product_colors where id >= 0');
}

populateColorTable = () => {
  for(let i = 0; i < colors.length; i++) {
    const text = 'INSERT INTO colors VALUES ($1, $2, $3)';
    const values = [i, colors[i], `https://source.unsplash.com/30x15/?${colors[i]}`];
    db.insert(text, values, (err, data) => {
      console.log(err, data);
    });
  }
}

populateRatingsTable = () => {
  for(let i = 0; i < productCount; i++) {
    const text = 'INSERT INTO ratings VALUES ($1, $2, $3, $4)';
    const values = [i, Math.floor(Math.random() * maxRating), i, Math.floor(Math.random() * 1000)];
    db.insert(text, values, (err, data) => {
      console.log(err, data);
    });
  }
}

populateSizeTable = () => {
  for(let i = 0; i < sizes.length; i++) {
    const text = 'INSERT INTO sizes VALUES ($1, $2)';
    const values = [i, sizes[i]];
    db.insert(text, values, (err, data) => {
      console.log(err, data);
    });
  }
}

populateNameTable = () => {
  for(let i = 0; i < productCount; i++) {
    let name = getRandomProductName();
    const text = 'INSERT INTO names VALUES ($1, $2)';
    const values = [i, name];
    db.insert(text, values, (err, data) => {
      console.log(err, data);
    });
  }
}

populateProdColorTable = () => {
  for(let i = 0; i < productCount; i++) {
    const availableColors = Math.floor(Math.random() * colorCount);
    for(let j = 0; j < availableColors; j++){
      const text = 'INSERT INTO product_colors VALUES ($1, $2, $3)';
      const values = [i + j, i, j];
      db.insert(text, values, (err, data) => {
        console.log(err, data);
      });
    }
  }
}

populateProdSizeTable = (cb) => {
  for(let i = 0; i < productCount; i++) {
    const availableSizes = Math.floor(Math.random() * sizes.length);
    for(let j = 0; j < availableSizes; j++) {
      const text = 'INSERT INTO product_sizes VALUES ($1, $2, $3)';
      const values = [i + j, i, j];
      db.insert(text, values, (err, data) => {
        cb(err, data);
      });
    }
  }
}

populateProductTable = () => {
  for(let i = 0; i < productCount; i++) {
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
  for(let i = 0; i < productCount; i++) {
    let imageCount = Math.floor(Math.random() * 8);
    imageCount = imageCount < 1 ? 1 : imageCount;
    for (let j = 0; j < imageCount; j++) {
      const text = 'INSERT INTO images VALUES ($1, $2, $3, $4, $5)';
      const colInd = Math.floor(Math.random() * colors.length);
      const isPrimary = j === 0 ? true : false;
      const values = [i, `https://source.unsplash.com/557x557/?${colors[colInd]}`, colInd, Math.floor(Math.random() * productCount), isPrimary];
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
  const result = [];
  for(let i = 0; i < count; i++) {
    result.push(colors[i]);
  }
  return result;
}

getRandomSizes = (count) => {
  const result = [];
  for(let i = 0; i < count; i++) {
    result.push(sizes[i]);
  }
  return result;
}

getRandomSku = () => {
  let result = ''
  for(let i = 0; i < skuLength; i++) {
    if(i === 0 || Math.random() > 0.5) {
      result += String.fromCharCode(Math.floor(Math.random() * 26 + 70));
    } else {
      result += Math.floor(Math.random() * 10);
    }
  }
  return result;  
}

setTimeout(() => {
  clearDB();
  populateDBWithRandomData();
}, 8000)