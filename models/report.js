const mongoose = require('mongoose');

// Schema for the report send by the user
const reportSchema = new mongoose.Schema({
    users:{
        type:[String],
        required:true
    },
    marketID:{
        type:String,
        required:true
    },
    marketName:{
        type:String,
        required:true
    },
    cmdtyID:{
        type:String,
        required:true
    },
    marketType:{
        type:String,
        required:true
    },
    cmdtyName: {
        type:String,
        required:true
    },
    priceUnit: {
        type:String,
        default:"Kg"
    },
    price: {
        type:Number,
        required:true
    }},
    {timestamps:true}
);

module.exports = new mongoose.model('Report',reportSchema);
