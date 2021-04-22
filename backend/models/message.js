const mongoose = require('mongoose');

// New schema for the messages
const messageSchema = new mongoose.Schema({
    title: String, 
    message: String,
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;