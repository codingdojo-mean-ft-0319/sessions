const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required'],
      minlength: [2, 'More title needed'],
      index: true
    },
    author: {
      type: String,
      trim: true,
      required: [true, 'Author is required']
    },
    pages: {
      type: Number,
      min: [1, 'More pages'],
      default: 1
    },
    year: Number,
    publisher: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Book', BookSchema);
