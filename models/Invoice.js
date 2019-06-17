const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const InvoiceSchema = new Schema({
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
    companyName: {
        type: String,
        required : true,
        trim: true
    },
    invoiceName : {
        type : String,
        required:true,
        trim : true
    },
    designation: {
        type: String,
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
    }
})

module.exports = Invoice = mongoose.model('invoices', InvoiceSchema)
