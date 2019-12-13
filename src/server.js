const express = require("express");

const port = process.env.PORT || 3333;

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Seu maluco",
    not: "Não é necessário"
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port} `);
});
