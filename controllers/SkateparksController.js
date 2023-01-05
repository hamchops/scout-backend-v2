const { Skateparks } = require('../models')

const GetSkateparks = async (req, res) => {
    try {
        const skatepark = await Skateparks.findAll()
        res.send(skatepark)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetSkateparks,
    // GetSkateparksLocation
}