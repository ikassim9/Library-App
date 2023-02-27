import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonComponent } from '../shared/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BookComponent } from './components/book/book.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalComponent } from 'src/shared/modal/modal.component';
import { FormsModule } from '@angular/forms';
 @NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    BookComponent,
    ModalComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
