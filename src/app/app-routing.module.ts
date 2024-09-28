import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AssignedBooksListComponent } from './components/assigned-books-list/assigned-books-list.component';

const routes: Routes = [ 
   {path:'',pathMatch:'full',component:BooksListComponent},
   {path:'bookslist',component:BooksListComponent},
   {path:'userslist',component:UsersListComponent},
   {path:'assignedList',component:AssignedBooksListComponent},
   {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
