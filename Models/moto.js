var mongoose = require('mongoose');

//CREATE A MODEL
var Moto = mongoose.model('moto', {
  contestname: {
    type: String,
    required: true,
    trim: true
  },
  startdate: {
    type: String,
    required: true,
    trim: true
  },
  enddate: {
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    required: true,
    trim: true
  },
  createdby: {
    type: String,
    required: true,
    minLength: 1
  },
  noofposts: {
    type: Number,
    required: true,
    minLength: 1,
    trim: true
  },
  lastactivity: {
    type: String,
    required: true,
    default: false
  }
})

module.exports = {Moto}
