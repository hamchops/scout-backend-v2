const { Dog_Parks } = require('../models')

const GetDogParks = async (req, res) => {
    try{
        const dogParks = await Dog_Parks.findAll()
        res.send(dogParks)
    } catch (error){
        throw error
    }
}

module.exports = {
    GetDogParks
}