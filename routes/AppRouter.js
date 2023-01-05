const Router = require('express').Router()
const SkateparksRouter = require('./SkateparksRouter')
const DogParksRouter = require('./DogParksRouter')
const SnowResortsRouter = require('./SnowResortsRouter')
const PlacesRouter = require('./PlacesRouter')

Router.use('/skateparks', SkateparksRouter)
Router.use('/places', PlacesRouter)
Router.use('/dogparks', DogParksRouter)
Router.use('/snowresorts', SnowResortsRouter)

module.exports = Router