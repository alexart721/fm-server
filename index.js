const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

app.get('/', (_, res) => {
  res.status(200).send('Hello, stranger!');
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}...`);
});
