import { Component, Input, OnInit } from '@angular/core';

import { IEntregaCliente, IEntregaEmpresa } from './../../models/entrega.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  constructor() {}

  @Input()
  titulo: string = '';

  @Input()
  dados!: IEntregaCliente | IEntregaEmpresa;

  ngOnInit(): void {}
}
