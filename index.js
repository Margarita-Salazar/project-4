require('dotenv').config();
const express = require('express');

const server = express();

const PORT = process.env.PORT

server.use(express.json());

server.use('*', (req,res)=>{
    res.send('<h1>Hello World</h1>')
})
server.listen(PORT, ()=>{
    console.log(`listening to ${PORT}`)
})