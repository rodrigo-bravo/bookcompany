import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { MatCardModule } from "@angular/material/card";
import { BookSearchComponent } from './containers/book-search.component';
import { BookSearchRoutingModule } from './book-search-routing';
import { mainSearchComponent } from './bookSearch/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BookSearchRoutingModule,
    AgmCoreModule,
    MatCardModule,
  ],
  declarations: [BookSearchComponent, mainSearchComponent],
  exports: [BookSearchComponent]
})
export class BookSearchModule { }
