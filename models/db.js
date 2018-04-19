const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'uniqly',
  port: 5432,
})

const insertIntoDatabase = (query, values, cb) => {
  pool.connect()
    .then(client => {
      return client.query(query, values)
        .then(res => {
          client.release();
          cb(null, res);
        })
        .catch(err => {
          client.release();
          cb(err, null);
        })
    })
}

const queryDatabase = (query, cb) => {
  pool.connect()
    .then(client => {
      return client.query(query)
      .then(res => console.log(res.rows[0]))
      .catch(e => console.error(e.stack))
    })
}

const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'uniqly',
  port: 5432,
})
client.connect();

queryDatabase('select * from colors', (err, data) => {
  console.log(err, data);
})

module.exports.query = queryDatabase;
module.exports.insert = insertIntoDatabase;