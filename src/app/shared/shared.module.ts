import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DataTableComponent } from './components/data-table/data-table.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, DataTableComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, NavbarComponent, DataTableComponent],
})
export class SharedModule {}
