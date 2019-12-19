const routes = require("express").Router();

const UserController = require("./controllers/UserController");

routes.get("/users", UserController.show);

//routes.post("/user", UserController.store);

module.exports = routes;
