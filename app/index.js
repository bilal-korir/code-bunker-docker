// Trigger git!

const express = require("express");
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, (port) => {
  console.log(`Example app listening at http://localhost:3000`);
});
