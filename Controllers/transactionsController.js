const express = require('express');
const transaction = express.Router();
const transactionArray = require('../Models/transaction');
const { validateURL } = require('../models/validation');

//! list of all transactions
transaction.get('/', (req, res) => {
  res.status(200).json(transactionArray);
});

//! transaction at index number
transaction.get('/:index', (req, res) => {
  const { index } = req.params;
  const { item_name, amount, date, from, category } = req.query;

  if (transactionArray[index]) res.status(200).json(transactionArray[index]);
  else res.redirect('/*');
});

//! Create a new transaction
transaction.post('/', validateURL, (req, res) => {
  transactionArray.push(req.body);
  res.json(transactionArray.at(-1));
});

//! update a transaction
transaction.put('/:index', validateURL, (req, res) => {
  if (transactionArray[req.params.index]) {
    transactionArray[req.params.index] = req.body;
    res.status(200).json(transactionArray[req.params.index]);
  } else {
    res.status(404).json({ error: 'Transaction not found' });
  }
});

//! delete transaction
transaction.delete('/:index', (req, res) => {
  const { index } = req.params.index;

  transactionArray.pop(req.body);
  res.json(transactionArray.at(-1));
});
module.exports = transaction;
