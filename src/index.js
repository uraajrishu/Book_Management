const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();
const multer= require("multer");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use( multer().any())

mongoose.connect("mongodb+srv://urajrishu:aUHDB96UyJaq9SB@cluster0.1wief.mongodb.net/urajrishu02", {
    useNewUrlParser: true
})
.then( () => console.log("Hey! Rishu..Go Ahead MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});