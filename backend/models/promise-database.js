const mysql2 = require('mysql2/promise');

module.exports = db = {};

connection()

async function connection() {
    var dbconnection = await mysql2.createConnection({
        host: "remotemysql.com",
        port:3306,
        user: "cex2HopF91",
        password: "ags4ktNiHq",
        database: "cex2HopF91",
      multipleStatements: true
    });

    db.connection = dbconnection;
}