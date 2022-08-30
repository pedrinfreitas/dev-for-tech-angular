import { Component, OnInit } from '@angular/core';

import { entregaEmpresaMock } from './../../shared/mocks/entrega.mock';
import { IEntregaEmpresa } from './../../shared/models/entrega.model';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit {
  constructor() {}

  titulo = 'Empresa';

  empresas: IEntregaEmpresa[] = entregaEmpresaMock;
  empresaSelecionada!: IEntregaEmpresa;

  ngOnInit(): void {}

  SelecionaEmpresa(empresa: IEntregaEmpresa): void {
    this.empresaSelecionada = empresa;
  }
}
