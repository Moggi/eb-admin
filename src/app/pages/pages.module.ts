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
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients/clients/clients.component';
import { ResetarSenhaComponent } from './resetar-senha/resetar-senha.component';
import { ProfessionalsComponent } from './professionals/professionals/professionals.component';
// import { DashboardModule } from './dashboard/dashboard.module';
// import { ECommerceModule } from './e-commerce/e-commerce.module';
// import { ThemeModule } from '../@theme/theme.module';
// import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ServicesComponent } from './services/services/services.component';
import { SimpleCheckboxRenderComponent } from '../components/smart-table/simple-checkbox-render/simple-checkbox-render.component';
import { SimpleColorRenderComponent } from '../components/smart-table/simple-color-render/simple-color-render.component';
import { SimpleColorEditorComponent } from '../components/smart-table/simple-color-editor/simple-color-editor.component';

const PAGES_COMPONENTS = [
    PagesComponent,
    HomeComponent,
    NotFoundComponent,
    ClientsComponent,
    ProfessionalsComponent,
    ResetarSenhaComponent,
    ServicesComponent,
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
        Ng2SmartTableModule,
    ],
    entryComponents: [
        SimpleCheckboxRenderComponent,
        SimpleColorRenderComponent,
        SimpleColorEditorComponent,
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
