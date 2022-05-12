// const express = require("express")
import express, {Express} from 'express'

// import dotenv = require('dotenv')
import dotenv from 'dotenv'

// const appRouter = require('./routes/appRouter')
import appRouter from './routes/appRouter'

dotenv.config()

const app:Express = express()
const PORT = process.env.PORT || 3000




app.use('/', appRouter)

try {
    app.listen(PORT, () => console.log('server up and listening on port', PORT))
} catch (error) {
    console.log("an error occurred while attempting to start the server...")
}