import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromBooks from './books';

import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment';

const enableTracing = false && !environment.production;

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'books',
    children: [
      {
        path: '',
        component: fromBooks.BookListComponent
      },
      {
        path: 'new',
        component: fromBooks.BookNewComponent
      },
      {
        path: ':book_id',
        component: fromBooks.BookDetailComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
