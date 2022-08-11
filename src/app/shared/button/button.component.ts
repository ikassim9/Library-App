import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonName?: string;

  @Input() buttonClass!: string;

  @Output() onClick = new EventEmitter();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

}
