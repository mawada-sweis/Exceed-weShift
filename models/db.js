const mysql = require('mysql2/promise');

module.exports = db = {};

connection()

async function connection() {
    var dbconnection = await mysql.createConnection({
      host:'localhost',
      database:'newdatabase',
      user:'root',
      password:'0000+123+333',
      multipleStatements: true
    });

    db.connection = dbconnection;
}


