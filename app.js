const express = require('express');
const transaction= require('./Controllers/transaction')
const cors = require('cors');
const app = express();
const morgan = require('morgan');

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/transactions',transaction)

app.get('/', (req, res) => res.send('Welcome to the budget Tracker app'));

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Page Not Found' });
});

module.exports = app;
