const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  creator: String,
  message: String,
  postTimeAndDate: String,
  likes: {
    type: Number,
    default: 0
  },
  comments: {
    type: Array,
    default: []
  }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
