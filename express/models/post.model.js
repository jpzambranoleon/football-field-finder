const mongoose = require("mongoose");
const mongooseIntl = require("mongoose-intl");
const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    types: {
      team: { type: Boolean, default: false },
      player: { type: Boolean, default: false },
      trainer: { type: Boolean, default: false },
    },
    title: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    description: String,
    phone: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

postSchema.plugin(mongooseIntl, { languages: ["en", "es"], defaultLanguage: "en" });

const Post = mongoose.model("post", postSchema);
module.exports = Post;
