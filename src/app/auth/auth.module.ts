import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';

import {
    NbLayoutModule, NbSidebarModule, NbMenuModule, NbSidebarService,
    NbCardModule, NbAlertModule, NbCheckboxModule, NbInputModule,
    NbDatepickerModule, NbMenuService, NbButtonModule, NbIconModule
} from '@nebular/theme';
// import { NbMenuService, NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';
import { ComponentsModule } from '../components/components.module';
import { LogoutComponent } from './logout/logout.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { NbAuthModule } from '@nebular/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { DashboardModule } from './dashboard/dashboard.module';
// import { ECommerceModule } from './e-commerce/e-commerce.module';
// import { ThemeModule } from '../@theme/theme.module';
// import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

const AUTH_COMPONENTS = [
    AuthComponent,
    LoginComponent,
    LogoutComponent,
];

@NgModule({
    imports: [
        AuthRoutingModule,
        // ThemeModule,
        // DashboardModule,
        // ECommerceModule,
        // MiscellaneousModule,
        ComponentsModule,
        CommonModule,
        FormsModule,
        // HttpClientModule,
        NbAuthModule,
        NbLayoutModule,
        NbSidebarModule,
        NbMenuModule,
        NbCardModule,
        NbCheckboxModule,
        NbInputModule,
        NbButtonModule,
        NbIconModule,
        NbAlertModule,
        NbDatepickerModule,
    ],
    declarations: [
        ...AUTH_COMPONENTS,
    ],
    providers: [
        NbSidebarService,
        // NbMenuInternalService,
        NbMenuService,
    ],
})
export class AuthModule {
}
