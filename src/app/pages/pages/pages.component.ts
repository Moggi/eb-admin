import { Component } from '@angular/core';

import { MENU_ITEMS } from '../pages-menu';
import { NbSidebarService } from '@nebular/theme';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['pages.component.scss'],
})
export class PagesComponent {

    menu = MENU_ITEMS;

    constructor(
        private sidebarService: NbSidebarService
    ) { }

    toggle() {
        this.sidebarService.toggle(true, 'left');
        return false;
    }
}
