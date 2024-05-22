const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref: "user",
        required: true,
    },
    token: {
        type: Number,
        required: true,
    },
   });

module.exports = mongoose.model("Token", tokenSchema);