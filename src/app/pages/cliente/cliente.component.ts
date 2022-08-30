import { Component, OnInit } from '@angular/core';

import { entregaClienteMock } from './../../shared/mocks/entrega.mock';
import { IEntregaCliente } from './../../shared/models/entrega.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {
  constructor() {}

  titulo = 'Cliente';

  clientes: IEntregaCliente[] = entregaClienteMock;
  clienteSelecionado!: IEntregaCliente;

  ngOnInit(): void {}

  SelecionaCliente(cliente: IEntregaCliente): void {
    this.clienteSelecionado = cliente;
  }
}
