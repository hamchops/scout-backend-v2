const express = require('express')
const cors = require('cors')

const app = express()

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())


// app.get('/', (req, res) => {
//     res.json("You're a wizard, Harry!")
// })

app.get('/', (req, res) => res.json({ message: 'Server Works' }))

app.use('/api', AppRouter)

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})