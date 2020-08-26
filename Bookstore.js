var express = require('express');
var app = express();

app.use(express.json()); 

let books =[
    { isbn: 9780061122415, name: "The Alchemist", author: "Coelho, Paulo"},
    { isbn: 9780451520081, name: "Alice in the Wonderland", author: "Carroll, Lewis"},
    { isbn: 9780060391164, name: "Freedom in Exile", author: "Lama, Dalai"},
    { isbn: 9780143106715 , name: "The Greek Myths", author: "Graves, Robert"}
]

const bookbaseurl = "/books";


// respond with "hello world" when a GET request is made to the homepage
//app.get('/', function (req, res) {
//  res.send('hello world');
//})

//get all books
app.get(bookbaseurl, function (req, res) {
    //json: send json object
    res.json(books);
  })

//get a book by isbn
app.get(bookbaseurl+'/:isbn', function (req, res) {
    let isbn = parseInt(req.params.isbn);
    const book = books.find(b => b.isbn===isbn);
    //send : send it as it is
    res.send(book);
  })

//add book to the list
app.post(bookbaseurl, function (req, res) {
    const book = {
        isbn : req.body.isbn,
        name: req.body.name,
        author: req.body.author
    }
    books.push(book);
    res.send(books);
  })

//delete book by isbn
app.delete(bookbaseurl+'/:isbn', function (req,res){
    let isbn = parseInt(req.params.isbn);
    const book = books.find(b => b.isbn===isbn);
    const i = books.indexOf(book);
    books.splice(i,1);
    res.json(books);

})

//update book by isbn
app.put(bookbaseurl+'/:isbn', function (req,res){
    let isbn = parseInt(req.params.isbn);
    const book = books.find(b => b.isbn===isbn);
    book.name = req.body.name;
    book.author = req.body.author;
    res.json(book);
})

app.listen(3000)