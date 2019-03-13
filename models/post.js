const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Comment = require('./comment.js')

const PostSchema = new Schema({
    title: String,
    description: String,
    link: String,
    comments: [Comment]
})

module.exports = PostSchema