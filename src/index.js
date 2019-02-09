/* eslint-disable no-console */
const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('hiya world'));
app.listen(port, () => console.log(`Profile Nine is running. Vist localhost:${port}`));
