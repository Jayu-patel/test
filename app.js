const express = require('express')
const app = express()
const data = require('./data')
const cors = require('cors')

app.use(cors())
app.get('/data',(req,res)=>{
    res.send(data)
})

app.listen(5000)