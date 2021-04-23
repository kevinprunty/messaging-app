const express = require('express');
const mongoose = require('mongoose');

const Message = require('../models/message.js');
const router = express.Router();

// Get messages
router.get('/messages', (req, res) => {
    Message.find()
        .then((response) => {
            console.log("Messages recieved");
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(409).send('409: Messages not recieved!');
            console.log(error.message);
        });
});
// Send messages
router.post('/messages', (req, res) => {
    const title = req.body.title;
    const message = req.body.body;

    const newMessage = new Message({ title, message });

    newMessage.save()
        .then((response) => {
            res.status(200).send("Message saved.")
        })
        .catch((error) => {
            res.status(409).send(error.message);
        })
});
// Edit messages

// Delete messages


module.exports = router;