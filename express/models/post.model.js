const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            max: 500,
        },
        city: {
            type: String,
            max: 50,
        },
        cellPhone: {
            type: String,
            max: 20,
        },
        email: {
            type: String,
            max: 50,
            unique: true,
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("Post", postSchema);