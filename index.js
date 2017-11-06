const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require ('mongoose');

// Set up express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://Breakpoint:breakpoint@breakpoint-shard-00-00-ti5q0.mongodb.net:27017,breakpoint-shard-00-01-ti5q0.mongodb.net:27017,breakpoint-shard-00-02-ti5q0.mongodb.net:27017/student-app?ssl=true&replicaSet=Breakpoint-shard-0&authSource=admin');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

// Initialise routes
app.use('/api', require('./routes/api'));

// Error handling Middleware
app.use(function(err, req, res, next) {
    // console.log(err);
    res.status(422).send({error: err.message});
});

// Listen for requests
app.listen(4000, function () {
    console.log('now listening for requests...');
});
