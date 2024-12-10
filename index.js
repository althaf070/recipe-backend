require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
require('./db/connection')

const recipeWorld = express()
recipeWorld.use(cors())
recipeWorld.use(express.json())
recipeWorld.use(router)
const PORT =  4000 ||process.env.PORT

recipeWorld.listen(PORT,()=> {
    console.log(`server listening on ${PORT}`);
})

recipeWorld.get("/",(req,res)=> {
    res.status(200).send(`<h1 style="color:red;">Recipe world started runnig</h1>`)
})