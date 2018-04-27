const db = require('./db.js');

createTables = () => {
  db.query(`CREATE TABLE IF NOT EXISTS colors (
    id INT,
    name TEXT,
    img_url TEXT
)`, (err, data) => {
  if(err){
    throw err;
    return;
  }
  console.log(data);
});
  db.query(`CREATE TABLE names (
    id INT,
    name TEXT
  )`, (err, data) => {  
    if(err){
      throw err;
      return;
  }
  console.log(data);
});
  db.query(`CREATE TABLE IF NOT EXISTS products (
    id INT,
    name_id INT,
    color_id INT,
    price INT,
    description TEXT,
    material TEXT,
    sku TEXT
  )`, (err, data) => {  
    if(err){
      throw err;
      return;
  }
  console.log(data)
});
  db.query(`CREATE TABLE IF NOT EXISTS images (
    id INT,
    img_url TEXT,
    color_id INT,
    name_id INT,
    isPrimary BOOL
  )`,  (err, data) => {  
    if(err){
      throw err;
      return;
  }
  console.log(data)
});
  db.query(`CREATE TABLE IF NOT EXISTS product_colors (
    id INT,
    product_id INT,
    color_id INT
  )`,  (err, data) => {  
    if(err){
      throw err;
      return;
  }
  console.log(data)
});
  db.query(`CREATE TABLE IF NOT EXISTS product_sizes (
    id INT,
    product_id INT,
    size_id INT
  )`,  (err, data) => {  
    if(err){
      throw err;
      return;
  }
  console.log(data)
});
  db.query(`CREATE TABLE IF NOT EXISTS ratings (
    id INT,
    rating INT,
    product_id INT,
    rating_count INT
  )`,  (err, data) => {  
    if(err){
      throw err;
      return;
  }
  console.log(data)
});
  db.query(`CREATE TABLE IF NOT EXISTS sizes (
    id INT,
    name TEXT
  )`,  (err, data) => {  
    if(err){
      throw err;
      return;
  }
  console.log(data);
  return;
});
}

setTimeout(() => {
  createTables();
}, 5000)