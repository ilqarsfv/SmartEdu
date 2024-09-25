const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("index");
});

const port = 2000;
app.listen(port, () => {
  console.log(`port: ${port} basladildi`);
});
