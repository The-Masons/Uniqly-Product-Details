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
      .then(res => cb(null, res))
      .catch(e => cb(e, null))
    })
}

const client = new Client({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'uniqly',
  port: 5432,
})
client.connect();

module.exports.query = queryDatabase;
module.exports.insert = insertIntoDatabase;