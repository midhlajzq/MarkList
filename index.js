require('dotenv').config()

// import Express
const express = require('express')

// import cors
const cors= require('cors')

// import connection file 
require('./db/connection')

// import router
const router= require('./routes/router')

// create server
const server = express()

// store port number
const PORT =3000

server.use(cors())
server.use(express.json())
server.use(router)

server.listen(PORT,()=>{
    console.log(`Recipe server started at port ${PORT}`);
})
