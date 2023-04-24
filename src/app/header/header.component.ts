import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //userdifined event creartion
  //@Output() : to share data from child to parent
  @Output() onMenuBtnClick = new EventEmitter()

  menubtnclicked(){
    //to occur an userdifined event
    this.onMenuBtnClick.emit()


    // to resize screen
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 100);
  }
}
