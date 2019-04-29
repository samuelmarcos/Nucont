const routes = require('express').Router()
const BalanceController = require('../app/controllers/BalanceController')

routes.get('/', BalanceController.store)

module.exports = routes
