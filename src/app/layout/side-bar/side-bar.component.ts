import { Component, EventEmitter, Output } from '@angular/core';
import { navBarDataMenu, navBarDataSoporte } from './side-bar-data';

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
  navDataSoporte = navBarDataSoporte;
  mostrarTooltip: boolean = false;

  ngOnInit(): void {
    this.expanded = true;
    this.screenWidth = window.innerWidth;
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
}
