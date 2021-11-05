const mongoose = require("mongoose");

const bookissueSchema = new mongoose.Schema({
    name:String,
    pageno:String,
    author:String,
    category:String,
    rollno:String,
    fromdate:String,
    todate:String,
});

module.exports = mongoose.model("BookIssue",bookissueSchema);