import { Component } from '@angular/core';
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
  constructor(private bookService: BookService) {}

  public showModal = false;

  ngOnInit(): void {
    this.books = this.bookService.refetch().pipe(
      switchMap(() => this.bookService.getBooks()));
  }

  public openModal(): void{
    this.showModal  =  true;
  }

  public closeModal(): void{
    this.showModal  =  false;
  }
}
