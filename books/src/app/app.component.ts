import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './models';
import { BOOKS } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book = new Book();
  books: Book[] = BOOKS;
  selectedBook: Book;

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    this.books.push(this.book);

    this.book = new Book();

    console.log('this books', this.books);

    form.reset();
  }

  onSelect(book: Book) {
    console.log('selecting book', book);
    // assignment       = (expression)            (if true) : (if false)
    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }
}
