// db.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'Srinidhi',
  user: 'root',
  password: 'Srinidhi@08',
  database: 'database',
});

module.exports = connection;
