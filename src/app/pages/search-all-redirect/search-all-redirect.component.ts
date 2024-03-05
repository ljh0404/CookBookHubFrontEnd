import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-search-all-redirect',
  templateUrl: './search-all-redirect.component.html',
  styleUrls: ['./search-all-redirect.component.css']
})
export class SearchAllRedirectComponent {
  items: MenuItem[] | undefined;

    activeItem: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Search', icon: 'pi pi-fw pi-home' },
            { label: 'Results', icon: 'pi pi-fw pi-calendar' },
            { label: 'Details', icon: 'pi pi-fw pi-pencil' }
        ];

        this.activeItem = this.items[0];
    }
}
