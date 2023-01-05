const Router = require('express').Router()
const controller = require('../controllers/SkateparksController')

Router.get('/', controller.GetSkateparks)

module.exports = Router