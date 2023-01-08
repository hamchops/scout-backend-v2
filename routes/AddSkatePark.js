const Router = require('express').Router()
const controller = require('../controllers/AddSkateParkController')

Router.get('/view/:reviews_id:', controller.GetReviews)