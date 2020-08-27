var express = require('express');
var app = express();

app.use(express.json());

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number
});

const Product = mongoose.model("Product", productSchema);
const productbaseurl = "/products";


// let products =[
//     { id: 1, name: "A", price: 10},
//     { id: 2, name: "B", price: 20},
//     { id: 3, name: "C", price: 30},
//     { id:4 , name: "D", price: 40}
// ]

// let count = products.length;


// respond with "hello world" when a GET request is made to the homepage
//app.get('/', function (req, res) {
//  res.send('hello world');
//})



//get all products
app.get(productbaseurl, function (req, res) {
  Product.find()
    .exec()
    .then(prod => {
      for (i = 0; i < prod.length; i++)
        console.log("Name: " + prod[i].name + ", Price: " + prod[i].price);
      res.status(200).json(prod);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
})




//get a product by id
app.get(productbaseurl + '/:id', function (req, res) {
  Product.findOne({ _id: req.params.id })
    .exec()
    .then(prod => {
      console.log("Name: " + prod.name + ", Price: " + prod.price);
      res.status(200).send(prod);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
})




//add product to the list
app.post(productbaseurl, function (req, res) {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });

  product
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



//delete product by id
app.delete(productbaseurl + '/:id', function (req, res) {
  Product.remove({ _id: req.params.id })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(prod);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send(err);
    });
})



//update product by id
app.put(productbaseurl + '/:id', function (req, res) {
  Product.update({ _id: req.params.id }, { price: 100 }) //that's the new price
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

app.listen(3000)
