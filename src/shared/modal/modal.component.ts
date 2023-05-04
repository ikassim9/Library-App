import {Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from 'src/models/book';
import { BookService } from 'src/services/book.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function



 @Input() public isEditMode: boolean | undefined;

 @Output() private close = new EventEmitter();

 @Input() book: Book;

 @ViewChild('bookForm', { static: true })userFrm: NgForm;


 private selectedFile!: File;


  constructor(private bookService: BookService){}


   ngOnInit(): void {
    if(this.isEditMode) {
    setTimeout(() => {
      this.userFrm.form.setValue({
        author: this.book.author,
        title: this.book.title,
        publicationDate: this.book.publicationDate,
        bookCover: '',
        description: this.book.description,
      });
    });
  }
   }

 public onCancelButtonClick(): void{
  this.close.emit();
 }


 public addEditBook(book: Book): void{
  const formData = new FormData();
   formData.append('title', book.title);
   formData.append('author', book.author);
   formData.append('description', book.description);
   formData.append('bookCover', this.selectedFile);
   formData.append('publicationDate', book.publicationDate);


   // handle edit book
   if(this.isEditMode){
    formData.append('id',this.book.id);
    formData.append('bookCoverUrl', this.book.bookCoverUrl);
// check if user change book cover

  const cover = formData.get('bookCover');
    if(cover === 'undefined'){
    formData.set('bookCover', this.book.bookCover);
    }

    this.bookService.editBook(formData, this.book.id).subscribe({
      error: (err) => console.log(err)
    });
   }

    // handle add book
   else{
    this.bookService.addBook(formData).subscribe({
      error: (err) => console.log(err)
    });
   }

   this.close.emit(); // do this to close form after submission



 }


 // handles file upload

 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 public handleFileInput(event: any){
  this.selectedFile = event.target.files[0];

 }

}
