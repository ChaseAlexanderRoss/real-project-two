const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema ({
    title: String,
    description: String,
    link: String,
})

module.exports = PostSchema