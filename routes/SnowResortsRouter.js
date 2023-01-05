const Router = require('express').Router()
const controller = require('../controllers/SnowResortsController')

Router.get('/', controller.GetSnowResorts)

module.exports = Router