/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/models/book';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(private bookService: BookService) {}
  ngOnInit(): void {}

  @Input() public book: Book;
  @Output() onClick = new EventEmitter();

  public deleteBook() {
    return this.bookService.deleteBook(this.book.id).subscribe();
  }

  public editBook(): void{
     this.bookService.setBookEdit(this.book);
     this.onClick.emit();
  }


}
