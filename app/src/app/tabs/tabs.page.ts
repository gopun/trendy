import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(){}

    tabSelected(tab) {
      // this.user.lastView = false;
      // this.user.TabView = true;
      // if (tab.index == 0) {
      //   this.user.lastTab = true;
      //   this.user.lastView = true;
      // } else {
      //   this.user.lastTab = false;
      //   this.user.lastView = false;
      // }

    }

}
