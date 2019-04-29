// const mongoose = require('mongoose')
// const Balance = mongoose.model('Balance')
const balance = require('../../balance')
const Balance = require('../models/Balance')

class BalanceController {
  async store (req, res) {
    for (const item of balance.balance) {
      // const {
      //   description,
      //   classifier,
      //   openingBalance,
      //   debit,
      //   credit,
      //   finalBalance,
      //   parent
      // } = item
      await Balance.create(item)
    }

    return res.send(balance.balance)
  }
}

module.exports = new BalanceController()
