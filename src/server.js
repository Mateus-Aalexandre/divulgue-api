const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

const port = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running at port ${port} `);
});
