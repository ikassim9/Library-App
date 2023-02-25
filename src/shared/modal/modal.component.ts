import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {

  }

 @Input() public openModal: boolean | undefined;

 @Output() private onCloseModal = new EventEmitter();


 public onCloseModalButtonClick(): void{
  this.onCloseModal.emit();
 }

}
