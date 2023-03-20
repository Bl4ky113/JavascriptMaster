
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send({
    message: "Start"
  });
});

app.get('/test', (req, res) => {
  res.status(200).send({
    message: "Hello World, Here I\'m in my API made with Express and NodeJs"
  });
});

module.exports = app;
