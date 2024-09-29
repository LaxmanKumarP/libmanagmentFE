import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AssignedBooksListComponent } from './components/assigned-books-list/assigned-books-list.component';




@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    UsersListComponent,
    PageNotFoundComponent,
    AssignedBooksListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ButtonModule,
    TableModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
