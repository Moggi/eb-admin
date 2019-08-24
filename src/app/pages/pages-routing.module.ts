import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages/pages.component';
import { RelatoriosComponent } from './relatorios/relatorios.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients/clients.component';
import { ClientNewComponent } from './clients/client-new/client-new.component';
import { ClientDetailComponent } from './clients/client-detail/client-detail.component';
// import { ResetarSenhaComponent } from './resetar-senha/resetar-senha.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { ECommerceComponent } from './e-commerce/e-commerce.component';
// import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: 
    [{
        path: 'home',
        component: HomeComponent,
    }, {
        path: 'relatorios',
        component: RelatoriosComponent,
    }, {
        path: 'relatorios/:username',
        component: RelatoriosComponent,
    }, {
        path: 'clientes',
        component: ClientsComponent,
    }, {
        path: 'clientes/:username',
        component: ClientDetailComponent,
    }, {
        path: 'clientes/add',
        component: ClientNewComponent,
    }, {
    //     path: 'senha',
    //     component: ResetarSenhaComponent,
    // }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    }, {
        path: '**',
        component: NotFoundComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
