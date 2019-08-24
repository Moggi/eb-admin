import { Component, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private sidebarService: NbSidebarService,
        private menuService: NbMenuService,
    ) { }

    ngOnInit() {
    }

    toggleSidebar(): boolean {
        this.sidebarService.toggle(true, 'menu-sidebar');
        // this.layoutService.changeLayoutSize();

        return false;
    }

    toggleSettings(): boolean {
        this.sidebarService.toggle(false, 'settings-sidebar');

        return false;
    }

    goToHome() {
        this.menuService.navigateHome();
    }

}
