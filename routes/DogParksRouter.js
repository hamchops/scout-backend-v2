const Router = require('express').Router()
const controller = require('../controllers/DogParksController')

Router.get('/', controller.GetDogParks)

module.exports = Router