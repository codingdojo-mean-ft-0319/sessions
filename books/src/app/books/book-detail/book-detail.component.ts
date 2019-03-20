import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { BookService } from '../../services';
import { Book } from 'src/app/models';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input()
  book: Book;

  constructor(
    private readonly bookService: BookService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   console.log(params.get('book_id'));
    //   const id = params.get('book_id');

    //   this.bookService.getBook(id).subscribe(book => {
    //     console.log('got book? ', book);
    //     this.book = book;
    //   });
    // });

    this.route.paramMap
      .pipe(
        map(params => params.get('book_id')),
        switchMap(id => this.bookService.getBook(id))
      )
      .subscribe(book => (this.book = book));
  }
}
