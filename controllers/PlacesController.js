const { Places, Snow_Resorts, Dog_parks } = require('../models')

const GetPlaces = async (req, res) => {
    try {
        const places = await Places.findAll()
        res.send(categories)
    } catch (error) {
        throw error
    }
}

const GetAllDogParks = async (req, res) => {
    try{
        const allDogParks = await Places.findAll({
            include: {model: Dog_parks, as: 'dog_parks'}
        })
        res.send(allDogParks)
    } catch (error){
        throw error
    }}

const GetAllSnowResorts = async (req, res) => {
    try {
        const allSnowResorts = await Places.findAll({
            include: { model: Snow_Resorts, as: 'snow_resorts'}
        })
        res.send(allSnowResorts)
    } catch (error){
        throw error
    }
}

module.exports = {
    GetPlaces,
    GetAllDogParks,
    GetAllSnowResorts
}