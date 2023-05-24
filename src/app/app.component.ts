import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  dropDownIsOpen: boolean = false;
  modalIsOpen: boolean = false;


  showModalDialog(){
    this.modalIsOpen = true;
  }
}
