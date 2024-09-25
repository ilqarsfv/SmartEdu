const express = require("express");
const pageRoute = require("./routes/pageRoute")

const app = express();

// Template Engin
app.set("view engine","ejs")

// middlewares
app.use(express.static("public"))

// routes
app.use("/", pageRoute);

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`port: ${port} basladildi`);
});
