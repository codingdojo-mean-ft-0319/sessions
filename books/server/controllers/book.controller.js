const Book = require('mongoose').model('Book');
const { Http } = require('@status/codes');

module.exports = {
  // gets all of resources (Book)
  index(request, response) {
    Book.find({})
      .then(books => response.json(books))
      .catch(error => response.status(Http.InternalServerError).json(error));
  },

  // create a resource
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },

  // get single resource
  show(request, response) {
    const { book_id: bookId } = request.params;
    Book.findById(bookId)
      .then(book => response.json(book))
      .catch(error => response.status(Http.NoContent).json(error));
  },

  // update a resource
  update(request, response) {
    const { book_id: bookId } = request.params;
    Book.findByIdAndUpdate(bookId, { $set: request.body }, { new: true })
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },

  // remove/delete/destroy single resource
  destroy(request, response) {
    const { book_id: bookId } = request.params;
    Book.findByIdAndRemove(bookId)
      .then(book => response.json(book))
      .catch(error => response.status(Http.InternalServerError).json(error));
  }
};
