const express = require('express');
const router = express.Router();
const { Post } = require('../models/index');

router.get('/', function(req, res) {
	res.render('index', { posts });
});

router.use('/post', require('./post.js'));

module.exports = router;
