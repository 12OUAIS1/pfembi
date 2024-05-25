const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
       
        required: true,
    },
    post: [
        {
            type: mongoose.Types.ObjectId,
            ref: "Post",
        },
    ],
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User",
        },
    ],
   });

module.exports = mongoose.model("Comment", commentSchema);
