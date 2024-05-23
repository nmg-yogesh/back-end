require('dotenv').config();
const express = require('express')

const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test',(req,res)=>{
    res.send("test page");
})

