import { Component } from '@angular/core';
import { GeneralService } from './services/general.service';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

export let browserRefresh = false;

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
  subscription!: Subscription;
  isSideNavexpanded = false;
  screenWidth = 0;

  constructor(private router:Router){
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
  });
  }

  onToggleSideNav(data:SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavexpanded = data.expanded;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
