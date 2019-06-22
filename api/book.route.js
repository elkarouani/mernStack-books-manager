const express = require('express');
const bookRoutes = express.Router();

// Require Business model in our routes module
let Book = require('./book.model');

// Defined store route
bookRoutes.route('/add').post(function (req, res) {
  let book = new Book(req.body);
  book.save()
    .then(book => {
      res.status(200).json({'book': 'book in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
bookRoutes.route('/').get(function (req, res) {
    Book.find(function(err, books){
    if(err){
      console.log(err);
    }
    else {
      res.json(books);
    }
  });
});

// Defined edit route
bookRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Book.findById(id, function (err, books){
      res.json(books);
  });
});

//  Defined update route
bookRoutes.route('/update/:id').post(function (req, res) {
    Book.findById(req.params.id, function(err, book) {
    if (!book)
      res.status(404).send("data is not found");
    else {
        book.book_title = req.body.book_title;
        book.autor_name = req.body.autor_name;
        book.price = req.body.price;

        book.save().then(book => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
bookRoutes.route('/delete/:id').get(function (req, res) {
    Book.findByIdAndRemove({_id: req.params.id}, function(err, book){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = bookRoutes;