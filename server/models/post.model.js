const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      max: 100,
    },
    desc: {
      type: String,
      max: 500,
    },
    city: {
      type: String,
      max: 20,
    },
    state: {
      type: String,
      max: 20,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postSchema);
module.exports = Post;
