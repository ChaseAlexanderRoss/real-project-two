const { Post } = require('../models/index')

Post.remove({}).then(function() {
    Post.create({
        title: 'title',
        description: 'description',
        link: 'link'
    })
})