const express = require("express")
const dotenv = require('dotenv')

const appRouter = require('./routes/appRouter')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000



app.use('/', appRouter)


try {
    app.listen(PORT, () => console.log('server up and listening on port', PORT))    
} catch (error) {
    console.log("an error occurred while attempting to start the server...")    
}