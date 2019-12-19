const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.json({
    msg: "Hello Div."
  });
});

module.exports = routes;
