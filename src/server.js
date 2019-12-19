const express = require("express");

const routes = require("./routes");
const connection = require("./database");

const port = process.env.PORT || 3333;

const app = express();

connection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at port ${port} `);
});
