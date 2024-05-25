const mongoose = require("mongoose");

const carteSchema = new mongoose.Schema({
    serie: {
        type: String,
        unique: true,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    pin: {
        type: Number,
        required: true,
    },
    exp: {
        type: Number,
        required: true,
    },
  
});

module.exports = mongoose.model("Carte", carteSchema);
