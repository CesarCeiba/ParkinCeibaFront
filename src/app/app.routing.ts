import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index.component';
import { SesionComponent } from './components/sesion.component';
import { RegistroComponent } from './components/registro.component';

const appRoutes: Routes = [
        {path: '', component: SesionComponent},
        {path: 'home', component: IndexComponent},
        {path: 'sesion', component: SesionComponent},
        {path: 'registro', component: RegistroComponent},
        {path: '**', component: SesionComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
