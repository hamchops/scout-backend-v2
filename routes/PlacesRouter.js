const Router = require('express').Router()
const controller = require('../controllers/PlacesController')

Router.get('/', controller.GetPlaces)
Router.get('/alldogparks', controller.GetAllDogParks)
Router.get('/allresorts', controller.GetAllSnowResorts)

module.exports = Router