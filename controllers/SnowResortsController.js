const { Snow_Resorts } = require(../models)

const GetSnowResorts = async (req, res) => {
    try{
        const snowResorts = await Snow_Resorts.findAll()
        res.send(snowResorts)
    } catch (error){
        throw error
    }
}

module.exports = {
    GetSnowResorts
}