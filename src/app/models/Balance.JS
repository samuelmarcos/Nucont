const mongoose = require('mongoose')

const BalanceSchema = new mongoose.Schema({
  description: {
    type: String,
    unique: false,
    required: false
  },

  classifier: {
    type: String,
    unique: false,
    required: false
  },
  openingBalance: {
    type: Number,
    unique: false,
    required: false
  },
  debit: {
    type: Number,
    unique: false,
    required: false
  },
  credit: {
    type: Number,
    unique: false,
    required: false
  },
  finalBalance: {
    type: Number,
    unique: false,
    required: false
  },
  parent: {
    type: String,
    unique: false,
    required: false
  }
})

module.exports = mongoose.model('Balance', BalanceSchema)
