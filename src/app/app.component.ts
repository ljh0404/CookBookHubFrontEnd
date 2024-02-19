import { Component } from '@angular/core';
import { GeneralService } from './services/general.service';

interface SideNavToggle{
  screenWidth : number;
  expanded : boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CookBookHub-FrontEnd';

  isSideNavexpanded = false;
  screenWidth = 0;

  onToggleSideNav(data:SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavexpanded = data.expanded;
  }

}
