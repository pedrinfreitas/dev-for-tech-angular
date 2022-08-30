export interface IEntrega {
  id: string;
  endereco: IEnderecoEntrega;
}

export interface IEnderecoEntrega {
  cep: string;
  rua: string;
  numero: string;
  cidade: string;
  uf: string;
  complemento: string;
}

export interface IEntregaCliente extends IEntrega {
  nomeCompleto: string;
  cpf: string;
  observacao?: string;
}

export interface IEntregaEmpresa extends IEntrega {
  remetente: string;
  cnpj: string;
  valor: number;
}
