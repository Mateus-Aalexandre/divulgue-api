const express = require("express");
const bodyParser = require('body-parser');

const port = process.env.PORT || 3333;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(require('./routes/users'));

app.listen(port, () => {
  console.log(`Server is running at port ${port} `);
});
