var express = require('express');
var app = express();
var router = express.Router();

app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

const bookSchema = mongoose.Schema({
    isbn: Number,
    title: String,
    publisher: String,
    year: Number,
    category: String,
    price: Number
  });

  const Books = mongoose.model("Books", bookSchema);
  
// define the home page route
router.get('/', function (req, res) {
  res.send('Books home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About books')
})

module.exports = router

