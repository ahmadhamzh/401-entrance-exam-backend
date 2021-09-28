const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Fruitschema = new Schema({
    name : {type : String},
    image : {type : String},
    price : {type : String}
})

const Addfruit = mongoose.model("myfavs", Fruitschema);
module.exports = Addfruit;