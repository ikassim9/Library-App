import { Component } from '@angular/core';
import { Book } from 'src/models/book';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'library-app';
  public books: Book[] = [];
  constructor(private bookService: BookService) {}

  public showModal = false;

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  public openModal(): void{
    this.showModal  =  true;
  }

  public closeModal(): void{
    this.showModal  =  false;
  }
}
