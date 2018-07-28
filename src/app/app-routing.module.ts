import {NgModule} from '@angular/core';
import {ListBooksComponent} from './components/list-books/list-books.component';
import {RouterModule, Routes} from '@angular/router';
import {NewBookComponent} from './components/new-book/new-book.component';
import {CategoriesComponent} from './components/categories/categories.component';


export const routes: Routes = [
  {path: '', component: ListBooksComponent},
  {path: 'all', redirectTo: ''},
  {path: 'new', component: NewBookComponent},
  {path: 'categories', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
