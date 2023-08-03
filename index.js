const express = require('express')
const app = express()
const port = 4005
const config = require('./config/key')
const {User} = require("./models/User");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true
}).then(() => console.log('mongo connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello World! hi !!')
})

app.post('/register', (req, res) => {
    const user = new User(req.body)

    user.save().then(()=>{
        res.status(200).json({
            success:true
        })
    }).catch((err)=>{
        return res.json({success:false,err})
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})