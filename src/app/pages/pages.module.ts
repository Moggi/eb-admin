import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';

import { PagesComponent } from './pages/pages.component';
import {
    NbLayoutModule,
    NbSidebarModule,
    NbMenuModule,
    NbSidebarService,
    NbCardModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbActionsModule,
    NbDatepickerModule,
    NbMenuService,
    NbToastrModule,
    NbSpinnerModule
} from '@nebular/theme';
// import { NbMenuService, NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';
import { ComponentsModule } from '../components/components.module';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients/clients.component';
import { ClientNewComponent } from './clients/client-new/client-new.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
import { ResetarSenhaComponent } from './resetar-senha/resetar-senha.component';
// import { DashboardModule } from './dashboard/dashboard.module';
// import { ECommerceModule } from './e-commerce/e-commerce.module';
// import { ThemeModule } from '../@theme/theme.module';
// import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const PAGES_COMPONENTS = [
    PagesComponent,
    HomeComponent,
    NotFoundComponent,
    RelatoriosComponent,
    ClientsComponent,
    ClientNewComponent,
    ClientDetailComponent,
    ResetarSenhaComponent,
];

@NgModule({
    imports: [
        PagesRoutingModule,
        ComponentsModule,
        // ThemeModule,
        // DashboardModule,
        // ECommerceModule,
        // MiscellaneousModule,
        FormsModule,
        CommonModule,
        NbLayoutModule,
        NbSidebarModule,
        NbMenuModule,
        NbAlertModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbActionsModule,
        NbSpinnerModule,
        NbToastrModule,
        NbDatepickerModule,
    ],
    declarations: [
        ...PAGES_COMPONENTS,
    ],
    providers: [
        NbSidebarService,
        // NbMenuInternalService,
        NbMenuService,
    ],
})
export class PagesModule {
}
