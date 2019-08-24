import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import {
    NbThemeModule, NbMenuModule, NbActionsModule, NbSidebarModule,
    NbLayoutModule, NbMenuService, NbSidebarService, NbCardModule, NbIconModule
} from '@nebular/theme';
// import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';
import { CommonModule } from '@angular/common';


const COMPONENTS = [
    HeaderComponent,
];

@NgModule({
    imports: [
        NbThemeModule,
        NbMenuModule,
        NbIconModule,
        NbActionsModule,
        NbLayoutModule,
        NbSidebarModule,
        NbCardModule,
        CommonModule,
    ],
    exports: [
        ...COMPONENTS,
    ],
    declarations: [
        ...COMPONENTS,
    ],
    providers: [
        NbSidebarService,
        // NbMenuInternalService,
        NbMenuService,
    ],
})
export class ComponentsModule {
}
