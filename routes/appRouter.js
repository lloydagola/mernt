const appRouter = require('express').Router()

try {
    appRouter.get('/', (req, res) => {
        res.status(200).send("welcome to the desert of the real")
    })
    
} catch (error) {
    console.log("an error occurred in the app router...")    
}



module.exports = appRouter