const {Schema, model} = require("mongoose");

const UserSchema = new Schema({
    Name:{
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true, 
    },
    Role:{
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
});

module.exports = model('User', UserSchema);