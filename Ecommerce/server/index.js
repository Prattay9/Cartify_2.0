const express = require('express')
const mongoose = require('mongoose')

const app = express()
const Db = 'mongodb+srv://prattaydas9:RWcxBajozbpQ7oHc@cluster0.cywxeuk.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0'

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