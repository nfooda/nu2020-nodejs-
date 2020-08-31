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

// // define the home page route
// router.get('/', function (req, res) {
//   res.send('Books home page')
// })
// // define the about route
// router.get('/about', function (req, res) {
//   res.send('About books')
// })

//get all books
router.get('/', function (req, res) {
  Books.find()
    .exec()
    .then(book => {
      for (i = 0; i < book.length; i++)
        console.log("title: " + book[i].title + ", price: " + prod[i].price);
      res.status(200).json(book);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
})


//get a book by isbn
router.get('/:isbn', function (req, res) {
  Books.findOne({ isbn: req.params.isbn })
    .exec()
    .then(book => {
      console.log("title: " + book.title + ", price: " + prod.price);
      res.status(200).send(book);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
})


//add book to the list
router.post('/', function (req, res) {
  const book = new Books({
    isbn: req.body.isbn,
    title: req.body.title,
    publisher: req.body.publisher,
    year: req.body.year,
    category: req.body.category,
    price: req.body.price
  });

  book
    .save()
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
})



//delete book by isbn
router.delete('/:isbn', function (req, res) {
  Books.remove({ isbn: req.params.isbn })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
})

//update book by isbn
router.put('/:isbn', function (req, res) {
  Books.update({ isbn: req.params.isbn }, { price: 100 }) //that's the new price
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
})

module.exports = router
