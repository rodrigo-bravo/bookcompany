import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './containers/book-search.component';

const routes: Routes = [
  { path: '', component: BookSearchComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookSearchRoutingModule {}
