import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Book } from '../../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();

  constructor() {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    // this.books.push(this.book);
    this.createBook.emit(this.book);

    this.book = new Book();

    // console.log('this books', this.books);

    form.reset();
  }
}
