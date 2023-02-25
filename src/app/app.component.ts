import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-app';
  public showModal = false;

  public openModal(): void{
    this.showModal  =  true;
  }

  public closeModal(): void{
    this.showModal  =  false;
  }
}
