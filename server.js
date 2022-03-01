const express = require('express');

const app = express();

const { animals } = require('./data/animals');

app.get('/api/animals', (req, res) => {
    res.send('Hello!');
  });

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

  