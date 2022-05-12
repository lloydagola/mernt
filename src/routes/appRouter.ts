import express, {Express, Request, Response} from 'express'

const appRouter = express.Router()

try {
    appRouter.get('/', (req:Request, res:Response) => {
        res.status(200).send("welcome to the desert of the real")
    })

} 
catch (error) {
    console.log("an error occurred in the app router...")
}



export default appRouter