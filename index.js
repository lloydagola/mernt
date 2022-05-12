const express = require("express")
const dotenv = require('dotenv')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("welcome, to the desert of the real")
})


app.listen(PORT, () => console.log('server up and listening on port', PORT))