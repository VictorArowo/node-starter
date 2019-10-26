/* eslint-disable comma-dangle */
const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.get('/hobbits', (req, res) => {
  const hobbits = [
    {
      id: 1,
      name: 'Samwise Gamgee'
    },
    {
      id: 2,
      name: 'Frodo Baggins'
    }
  ];

  res.status(200).json(hobbits);
});

// eslint-disable-next-line no-console
server.listen(8000, () => console.log('API running on port 8000'));
