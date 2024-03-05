import { Component, EventEmitter, Output } from '@angular/core';
import { navBarDataMenu, navBarDataResults } from './side-bar-data';
import { Router } from '@angular/router';

interface SideNavToggle{
  screenWidth : number;
  expanded : boolean;
}

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  @Output() onToggleSideNav : EventEmitter<SideNavToggle> = new EventEmitter();
  expanded = false;
  screenWidth = 0;
  navDataMenu = navBarDataMenu;
  navDataResults = navBarDataResults;
  mostrarTooltip: boolean = false;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.toggleexpanded();
  }

  toggleexpanded(): void {
    if (this.expanded) {
      this.expanded= !this.expanded;
      this.onToggleSideNav.emit({expanded: this.expanded, screenWidth: this.screenWidth});
    }

    else{
      this.expanded= !this.expanded;
      this.onToggleSideNav.emit({expanded: this.expanded, screenWidth: this.screenWidth});
    }
  }
  closeSidenav(): void{
    this.expanded=false;
    this.onToggleSideNav.emit({expanded: this.expanded, screenWidth: this.screenWidth});
  }

  redirectDashboard(){
    this.router.navigate(['/dashboard']);
  }
}
