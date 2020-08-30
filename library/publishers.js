var express = require('express');
var app = express();
var router = express.Router();

app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });


const publisherSchema = mongoose.Schema({
    id: Number,
    name: String,
    address: String,
    email: String  
  });

  const Publishers = mongoose.model("Publishers", publisherSchema);
  
// define the home page route
router.get('/', function (req, res) {
  res.send('Publishers home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About publishers')
})

module.exports = router

