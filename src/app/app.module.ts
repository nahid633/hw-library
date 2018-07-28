import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListBooksComponent } from './components/list-books/list-books.component';
import {AppRoutingModule} from './app-routing.module';
import {DataViewModule} from 'primeng/dataview';
import {BookService} from './services/book.service';
import {HttpClientModule} from '@angular/common/http';
import {DialogModule, DropdownModule, MenubarModule, PanelMenuModule, PanelModule, TabMenuModule} from 'primeng/primeng';
import { NewBookComponent } from './components/new-book/new-book.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    NewBookComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    DataViewModule, HttpClientModule, DropdownModule, DialogModule, PanelModule, MenubarModule, TabMenuModule, TooltipModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
