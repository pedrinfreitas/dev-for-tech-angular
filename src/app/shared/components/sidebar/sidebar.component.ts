import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sidebarToggle() {
    const el = document.getElementById('accordionSidebar');
    const toggle = el?.classList.value.includes('toggled');
    toggle ? el?.classList.remove('toggled') : el?.classList.add('toggled');
  }
}
