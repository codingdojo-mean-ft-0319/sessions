import { Component, OnInit } from '@angular/core';

import { Book } from '../../models';

import { BookService } from '../../services';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book;

  constructor(private readonly bookService: BookService) {}

  ngOnInit() {
    console.log(this.bookService);
    this.bookService.getBooks().subscribe(books => (this.books = books));
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

  onCreate(book: Book) {
    console.log('creating book', book);

    this.bookService.createBook(book).subscribe(createdBook => {
      this.books = [...this.books, createdBook];
      // this.books.push(createdBook);
      console.log(createdBook);
    });
  }

  onDelete(id: number) {
    console.log('deleting book', id);
    this.bookService.removeBook(id).subscribe(deletedBook => {
      this.books = this.books.filter(book => book.id !== deletedBook.id);
    });
  }

  onEvent(event: Event) {
    event.stopPropagation();
    console.log('event triggered');
  }
}
