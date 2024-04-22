const express = require('express')
const mongoose = require('mongoose')

const app = express()
const Db = 'mongodb://localhost:27017/cart'

mongoose.connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log(`connection successful`)
}).catch((err) => console.log(`connection failed`, err));

app.get('/', (req, res) => {
    res.send(`Hello from server`);
})

app.listen(3000, () => {
    console.log(`Server is running at port no 3000`)
})