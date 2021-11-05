const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name:String,
    pageno:String,
    author:String,
    category:String,
    price:String,
    publication:String,
    avilablenumber:String
});

module.exports = mongoose.model("TotalBooks",bookSchema);