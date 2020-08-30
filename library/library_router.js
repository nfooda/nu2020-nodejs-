var express = require('express');
const app = express();
var router = express.Router()

app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });



var Books = require('./books');
app.use('/books', Books);

var Users = require('./users');
app.use('/users', Users);

var Publishers = require('./publishers');
app.use('/publishers', Publishers);

var Categories = require('./categories');
app.use('/categories', Categories);

app.listen(3000)

