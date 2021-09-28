const {request, response} = require('express');
const Addfruitmodel = require('../model/Fruit.model');

const Addfruit = (request, response)=>{
    const {name, image, price}= request.body 
    const newFruit = new Addfruitmodel({
        name, image, price
    })
    newFruit.save()
    response.json(newFruit)
}
const getFavs = (request, response)=>{
    Addfruitmodel.find((error, getRes)=>{
        response.json(getRes)
    })
}

const deleteFruit = (request, response)=>{
    const fruitId = request.params.fruitId
    Addfruitmodel.deleteOne({_id:fruitId},(error, deletedData)=>{
        response.json(deletedData)
    })
}

const UpdateFruit = (request,response)=>{
    const {name, image, price}= request.body
    const fruitId = request.params.fruitId
    Addfruitmodel.findByIdAndUpdate({_id:fruitId},{name, image, price},{new:true},(error,updatedData)=>{
        response.json(updatedData)
    })
}


module.exports = {Addfruit, getFavs, deleteFruit, UpdateFruit}