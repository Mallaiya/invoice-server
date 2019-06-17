const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
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
  designation: {
    type: String,
    required : true
  },
  password : {
      type : String,
      required : true
  },
  photo : {
    type : String
  }
})

module.exports = User = mongoose.model('users', UserSchema)
