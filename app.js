const express = require('express')
const app = express()
const data = require('./data')

app.get('/data',(req,res)=>{
    res.send(data)
})
app.listen(5000)