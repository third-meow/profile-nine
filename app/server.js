/* eslint-disable no-console */
const express = require('express');
const path = require('path');

const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  // ?res.sendHeader({'content-type':'html'});
  res.sendFile('index.html');
});

app.get('/api/stockprice/BTC', (req, res) => {
  res.send({ price: '1302' });
});

app.listen(port, () => console.log(`Profile Nine is running. Vist localhost:${port}`));
