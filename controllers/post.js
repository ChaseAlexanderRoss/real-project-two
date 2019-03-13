const { Post }  = require('../models/index')

module.exports = {
    new: function(req, res) {
      res.render("post/new");
    },
    create: function(req, res) {
      const { title, description, link } = req.body;
      Post.create({
        title,
        description,
        link,
      }).then(post => {
        res.redirect(`/post/${post._id}`);
      });
    },
    show: function(req, res) {
      Post.findById( req.params.id ).then(post => {
        res.render("post/show", { post });
      });
    },
    edit: function(req, res) {
      Post.findById(req.params.id).then(post => {
        res.render("post/edit", { post });
      });
    },
    update: function(req, res) {
      console.log(req.body);
      const { title, description, link } = req.body;
        Post.findOneAndUpdate(
          req.params.id,
          {
            title,
            description,
            link
          },
          {
            runValidators: true
          }
        ).then(post => {
          res.redirect(`/post/${post._id}`);
        }).catch(err => {
          console.log(err);
        });
    },
    delete: function(req, res) {
      Post.remove({ _id: req.params.id }).then(post => {
        console.log(post)
        res.redirect("/");
      });
    },
    comment: function(req, res) {
      const addComment = {
        comment: req.body.comment
      };
      Post.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { comments: addComment } }
      ).then(post => {
        res.redirect(`/post/${post._id}`);
      });
     }
};