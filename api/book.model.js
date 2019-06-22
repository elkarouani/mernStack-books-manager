const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Book = new Schema({
  book_title: {
    type: String
  },
  autor_name: {
    type: String
  },
  price: {
    type: Number
  }
},{
    collection: 'Book'
});

module.exports = mongoose.model('Business', Book);