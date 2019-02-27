const mongoose = require('mongoose')
mongoose.connect('mongod://localhost/post')
mongoose.Promise = Promise
module.exports = mongoose