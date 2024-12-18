import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private menu: MenuController) {}

  openMenu() {
    this.menu.open(); 
  }

  closeMenu() {
    this.menu.close();
  }
}
