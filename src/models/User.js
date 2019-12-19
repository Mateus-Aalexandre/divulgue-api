const Connection = require("../database/");

class User {
  static getAll() {
    return Connection.executeSQL("SELECT * FROM tb_users");
  }
}

module.exports = User;
