var express = require('express');
var app = express();
var router = express.Router();

app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });


const categorySchema = mongoose.Schema({
    title: String,
    parent_category: String
  });

  const Categories = mongoose.model("Categories", categorySchema);
  
// define the home page route
router.get('/', function (req, res) {
  res.send('categories home page')
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About categories')
})

module.exports = router

