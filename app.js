const express = require("express");

const app = express();

// Template Engin
app.set("view engine","ejs")

// middlewares
app.use(express.static("public"))

// routes
app.get("/", (req, res) => {
  res.render("index",{
    page_name: "index"
  });
});
app.get("/about", (req, res) => {
  res.render("about",{
    page_name: "about"
  });
});

const port = 2000;
app.listen(port, () => {
  console.log(`port: ${port} basladildi`);
});
