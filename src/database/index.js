const mysql = require("mysql2");

const dbConfig = require("../configs/database");

class Connection {
  static connect() {
    const connection = mysql.createConnection(dbConfig);

    connection.connect(function(err) {
      if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }

      console.log("connected as id " + connection.threadId);
    });

    return connection;
  }

  static executeSQL(query, params) {
    const connection = this.connect();

    return new Promise((resolve, reject) => {
      connection.query(query, (err, results, fields) => {
        if (!err) {
          resolve(results);
        } else {
          reject(err);
        }
      });
    });
  }
}

module.exports = Connection;
