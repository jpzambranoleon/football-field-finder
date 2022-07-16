const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "Invalid User"],
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "post_type",
      required: [true, "Invalid post tyle"],
    },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    state: {
      type: Schema.Types.ObjectId,
      ref: "state",
      required: [true, "Invalid state"],
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: "city",
      required: [true, "Invalid city"],
    },
    contact: {
      phone: { value: String, public: { type: Boolean, default: true } },
      email: { value: String, public: { type: Boolean, default: true } },
    },
    location: {
      description: String,
      place_id: String,
      lat: Number,
      lng: Number,
    },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("post", postSchema);
module.exports = Post;
