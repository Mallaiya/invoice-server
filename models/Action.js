const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ActionSchema = new Schema({
    userName: {
        type: String,
        required : true,
        trim: true
    },
    emailId: {
        type: String,
        required : true,
        trim: true
    },
    invoiceName : {
        type : String,
        required:true,
        trim : true
    },
    companyName : {
        type : String,
        required : true
    },
    pdfSrc : {
        type : String
    },
    createdDate : {
        type : String,
        required : true
    },
    createdTime : {
        type : String,
        required : true
    },
    to : {
        type : String,
    },

    cc : {
        type : String,
    },

    subject : {
        type : String,
    },

    content : {
        type : String,
    },

    type : {
        type : String,
        required : true        
    },

    reason : {
        type: String,
        required : true
    }

})

module.exports = Action = mongoose.model('actions', ActionSchema)
