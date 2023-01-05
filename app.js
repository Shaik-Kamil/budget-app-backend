const express = require('express');
const transaction = require('./Controllers/transactionsController');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

app.use((req, res, next) => {
  console.log('This code runs on every request');
  next();
});

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));

//! pathing
app.use('/transactions', transaction);

//! Home page
app.get('/', (req, res) => {
  res.send('Welcome to the budget Tracker app');
});

//! Error page
app.get('*', (req, res) => {
  res.status(404).json({ error: 'Page Not Found' });
});

module.exports = app;
