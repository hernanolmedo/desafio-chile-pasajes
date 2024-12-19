import { Component } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isSplitPaneVisible: boolean = false;

  constructor(private menu: MenuController) {}

  openMenu() {
    this.menu.open(); 
  }

  closeMenu() {
    this.menu.close();
  }

  onSplitPaneVisible(event: any) {
    this.isSplitPaneVisible = event.detail.visible;
    console.log('Split pane visible:', this.isSplitPaneVisible);
  }
}
