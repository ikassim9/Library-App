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

 private selectedFile!: File;



 public onCloseModalButtonClick(): void{
  this.onCloseModal.emit();
 }

 public addBook(book: Book): void{

  this.onCloseModal.emit(); // do this to close form after submission
  const formData = new FormData();
   formData.append('title', book.title);
   formData.append('author', book.author);
   formData.append('description', book.description);
   formData.append('bookCover', this.selectedFile);
   formData.append('publicationDate', book.publicationDate);


  this.bookService.addBook(formData).subscribe(response => {
   console.log('book added ' + response);
  });
 }


 // handles file upload

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 public handleFileInput(event: any){
  this.selectedFile = event.target.files[0];

 }

}
