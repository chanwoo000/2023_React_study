const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chanwoo000:jung980420!@chanwoo.sktmzr8.mongodb.net/',{
    useNewUrlParser: true, useUnifiedTopology:true
}).then(() => console.log('mongo connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})