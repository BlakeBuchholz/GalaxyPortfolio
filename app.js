const express = require("express");
const app = express();
const port = 3000;

const path = require('path')
app.use('/', express.static(path.join(__dirname, 'Public')))

app.listen(port, function () {
  console.log(`App Listening on port 3000`);
});

//change