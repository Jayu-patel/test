const express = require('express')
const app = express()
const data = require('./data')
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())
app.get('/data',(req,res)=>{
    res.send(data)
})

app.listen(port)
