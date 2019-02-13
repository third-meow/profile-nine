/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const reqp = require('request-promise');

const port = 8080;
const app = express();

const apiOps = {
  key: 'P6RK5JHD2J3MNT1H',
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendHeader({ 'content-type': 'html' });
  res.sendFile('index.html');
});

app.get('/api/stockprice/:symb', (req, res) => {
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${req.params.symb}&apikey=${apiOps.key}`;

  reqp(apiUrl)
    .then((response) => {
			//parse into JSON
      const result = JSON.parse(response);

			//get last refeshed date
      const dateStr = result['Meta Data']['3. Last Refreshed'];

			//get adjusted close on last refreshed
      const adjClose = result['Time Series (Daily)'][dateStr]['5. adjusted close'];

			//send back the adjusted close
      res.send({ 'adjusted close': adjClose });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => console.log(`Profile Nine is running. Vist localhost:${port}`));
