const Post = require("../models/post");
const TokenGenerator = require("../lib/token_generator");

const PostsController = {
  Index: async (req, res) => {
    if (req.query.creator !== "all") {
      const posts = await Post.find({creator: req.query.creator})
      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(200).json({ posts: posts, token: token });
    } else {
      const posts = await Post.find()
      const token = await TokenGenerator.jsonwebtoken(req.user_id)
      res.status(200).json({ posts: posts, token: token });
      }
  },
  Create: (req, res) => {
    const post = new Post(req.body);
    post.save((err) => {
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.user_id)
      res.status(201).json({ message: 'OK', token: token });
    });
  },
  Delete: (req, res) => {
    Post.findByIdAndDelete(req.params.id, (err, post) => {
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.user_id)
      res.status(201).json({ message: 'OK', token: token });
    });
  },
  Like: (req, res) => {
    Post.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, (err, post) => {
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.user_id)
      res.status(201).json({ message: 'OK', token: token });
    });
  },
  Unlike: (req, res) => {
    Post.findByIdAndUpdate(req.params.id, { $inc: { likes: -1 } }, (err, post) => {
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.user_id)
      res.status(201).json({ message: 'OK', token: token });
    });
  },
  Comment: (req, res) => {
    Post.findByIdAndUpdate(req.params.id, { $push: {comments: {creator: req.body.creator, comment: req.body.comment}} }, (err, post) => {
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.user_id)
      res.status(201).json({ message: 'OK', token: token });
    }); 
  },
  ShowComment: (req, res) => {
    Post.findById(req.params.id, (err, post) => {
      if (err) {
        throw err;
      }
      const token = TokenGenerator.jsonwebtoken(req.user_id)
      res.status(201).json({ "post.comments": post.comments, token: token });
    }); 
  }
}

module.exports = PostsController;
