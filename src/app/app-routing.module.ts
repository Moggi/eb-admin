import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';


const routes: Routes = [
    {
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule',
        canActivate: [AuthGuard],
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages' },
    //   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
