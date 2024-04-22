const mongoose = require("mongoose");
const userverificationSchema = new mongoose.Schema({
    userid: {
        type: String,
     
    },
    uniquestring: {
        type: String,
     
    },
    
    created: {
        type: Date,
     
    },
    
    expires: {
        type: Date,
    
    },
    numberu: {
        type: String,
        
        required: true,
    },
verufied:{type:Boolean,}
});

module.exports = mongoose.model("Userverification", userverificationSchema);

