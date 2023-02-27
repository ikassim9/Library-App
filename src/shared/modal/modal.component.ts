import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/models/book';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {

  }

constructor(private bookService: BookService){

}

 @Input() public openModal: boolean | undefined;

 @Output() private onCloseModal = new EventEmitter();


 public onCloseModalButtonClick(): void{
  this.onCloseModal.emit();
 }

 onSubmit(book: Book): void{
  this.onCloseModal.emit(); // do this to close form afte submission
  this.bookService.addBook(book).subscribe(book => {
    console.log('book added ' + book);
  });
 }

}
