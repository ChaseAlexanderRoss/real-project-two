const express = require('express')
const router = express.Router()
const postController = require('../controllers/post')

router.get('/new', postController.new)
router.get('/', postController.create)
router.get('/:id', postController.show)
router.get('/:id/edit', postController.edit)
router.get('/:id', postController.update)
router.get('/:id', postController.delete)

module.exports = router