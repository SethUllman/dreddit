const express = require("express");
const router = express.Router();
const Comment = require('../../models/Comment');
const Post = require('../../models/Post');
const User = require('../../models/User');
const Vote = require('../../models/Vote');
const passport = require('passport');
const jwt_decode = require('jwt-decode');


router.post('/', (req, res) => {

  const newComment = new Comment({
    text: req.body.text,
    user: req.body.user,
    post: req.body.post,
  })

  newComment.save()
    .then(comment => {
      User.findById(comment.user.toJSON())
        .then(user => {
          user.comments.push(comment._id);
          user.save()
            .then(user => {
              const userJSON = user.toJSON();
              delete userJSON['password'];
              delete userJSON['date'];
              Post.findById(comment.post.toJSON())
                .then(post => {
                  post.comments.push(comment._id);
                  post.save()
                    .then(post => {
                      return res.send({ post, comment, user: userJSON })
                    })
                })
            })
        })
    })
})

router.post('/:commentId/reply', (req, res) => {
  const reply = new Comment({
    text: req.body.text,
    user: req.body.user,
    post: req.body.post,
    comment: req.body.comment
  })

  reply.save()
    .then(reply => {
      User.findById(reply.user.toJSON())
        .then(user => {

          user.comments.push(reply._id);
          user.save()
            .then(user => {
              const userJSON = user.toJSON();
              delete userJSON['password'];
              delete userJSON['date'];
              Post.findById(reply.post.toJSON())
                .then(post => {
   
                  post.comments.push(reply._id);
                  post.save()
                    .then(post => {

                      return res.send({ post, comment: reply, user: userJSON })
                    })
                })
            })
        })
    })
})

// router.delete('/:commentId', (req, res) => {

// })

module.exports = router;