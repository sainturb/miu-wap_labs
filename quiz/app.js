const { response } = require("express");
const express = require("express");
const app = express();
var router = require("./routes");
app.listen(80, () => {
  console.log("Your Server is running on 80");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
app.use((req, res, next) => {
  res.status(404).send('404');
});