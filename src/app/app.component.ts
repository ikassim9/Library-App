import {Component } from '@angular/core';
 import { Observable, switchMap } from 'rxjs';
import { Book } from 'src/models/book';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'library-app';
  public books: Observable<Book[]>;
  public showModal = false;
  public data : Book;
  isEditMode: boolean;


  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.books = this.bookService
      .refetch()
      .pipe(switchMap(() =>   this.bookService.getBooks()));

  }

  public openModal(isEditMode: boolean): void {
    this.showModal = true;
    if(isEditMode){
    this.data = this.bookService.getEditBook();
    this.isEditMode = true;
    }
  }

  public closeModal(): void {

    this.showModal = false;
    this.isEditMode = false;
  }

}
