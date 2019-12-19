const UserModel = require("../models/User");

module.exports = {
  async show(req, res) {
    const response = await UserModel.getAll();
    //console.log(response);
    return res.json(response);
  }
};
