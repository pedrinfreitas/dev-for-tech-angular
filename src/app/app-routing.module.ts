import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './pages/cliente/cliente.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '**',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
