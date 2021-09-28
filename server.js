const express = require('express') 
const app = express() 
const cors = require('cors');

app.use(cors())
app.use(express.json());
require('dotenv').config();
const mongoose = require("mongoose");
const { response } = require('express');
const PORT = process.env.PORT
const mongoUrl = process.env.MONGO_ATLAS_URL
mongoose.connect(mongoUrl)
const {Addfruit, getFavs, deleteFruit, UpdateFruit} = require('./controller/fruit.controller')
app.get('/',(request, response)=>{
    response.send('hello')
})

app.post('/favs', Addfruit)
app.get('/favs', getFavs)
app.delete('/favs/:fruitId', deleteFruit)
app.put('/favs/:fruitId', UpdateFruit)

app.listen(3003, ()=>{console.log(`listining to ${PORT}`);})