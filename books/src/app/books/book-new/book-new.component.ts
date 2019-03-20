import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Book } from '../../models';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book = new Book();

  @Output()
  createBook = new EventEmitter<Book>();

  constructor(
    private readonly router: Router,
    private readonly bookService: BookService
  ) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    // this.books.push(this.book);
    // this.createBook.emit(this.book);
    this.bookService.createBook(this.book).subscribe(book => {
      console.log('book new ', book);
      // this.router.navigate(['/'])
      this.router.navigateByUrl('/');
    });

    this.book = new Book();

    // console.log('this books', this.books);

    form.reset();
  }
}
