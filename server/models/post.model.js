const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    types: {
      team: { type: Boolean, default: true, required: true },
      player: { type: Boolean, default: false, required: true },
      trainer: { type: Boolean, default: false, required: true },
    },
    title: {
      type: String,
      required: true,
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
    email: {
      type: String,
      max: 20,
    },
    phone: {
      type: String,
      max: 20,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postSchema);
module.exports = Post;
