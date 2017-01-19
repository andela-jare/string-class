/* eslint amd:true */
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/')));
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

const port = process.env.PORT || 3000;
app.listen(port);
