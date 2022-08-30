import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, ClienteComponent, EmpresaComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
