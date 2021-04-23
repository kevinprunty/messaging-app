const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const options = require('../options.js');

const apiRoute = require('./routes/api.js');

const app = express();
const PORT = process.env.PORT || 3001;


// Body parsing
app.use(express.json());

// Enable CORS
app.use(cors());

// Connect to MongoDB
const URI = `mongodb+srv://admin-user:${options.mongoDBPassword}@cluster0.nee8h.mongodb.net/MessageDatabase?retryWrites=true&w=majority`;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((response) => {
        console.log("Connected to MongoDB");
    });

app.use('/api', apiRoute);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})

module.export = app;