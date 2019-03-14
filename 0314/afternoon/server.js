const parser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const { PORT: port = 8000 } = process.env;
const { Schema } = mongoose;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(parser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/authors', { useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('Mongodb connected'))


const AuthorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true,
    minlength: [2, 'Provide more name'],
  },
  age: {
    type: Number,
    required: true,
    min: 1,
  },
  isAlive: {
    type: Boolean,
    default: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }
  ]
});


const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  pages: Number,
  year: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
});

const Author = mongoose.model('Author', AuthorSchema);
const Book = mongoose.model('Book', BookSchema);


app.get('/', function (request, response) {
  response.render('index');
});

app.get('/authors', function (request, response) {
  Author.find({})
    .populate('books')
    .then(authors => response.render('authors/index', { authors }))
    .catch(console.log)
})

app.get('/authors/new', function (request, response) {
  response.render('authors/new');
})


app.post('/authors', function (request, response) {
  Author.create(request.body)
    .then(author => {
      console.log(author);
      response.redirect('/authors');
    })
    .catch(error => {
      const errors = Object.keys(error.errors).map(key => error.errors[key].message);
      // render page show errors
    });
})

app.get('/books', function (request, response) {
  Book.find({})
    .populate('author')
    .then(books => response.render('books/index', { books }))
    .catch(console.log);
})

app.get('/books/new', function (request, response) {
  Author.find({})
    .then(authors => response.render('books/new', { authors }))
});

app.post('/books', function (request, response) {
  Book.create(request.body)
    .then(book => {
      console.log(book);

      return Author.findById(book.author)
        .then(author => {
          console.log('author ', author);
          author.books.push(book._id);

          return author.save();
        })
        .then(() => {
          response.redirect('/books');
      })

    })
});

app.listen(port, () => console.log(`Express server listening on port ${port}`));