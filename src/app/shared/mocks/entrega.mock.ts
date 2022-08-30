import { IEntregaCliente, IEntregaEmpresa } from './../models/entrega.model';

export const entregaClienteMock: IEntregaCliente[] = [
  {
    id: '1',
    nomeCompleto: 'Pedro Antonio',
    cpf: '12312312399',
    endereco: {
      cep: '23946085',
      rua: 'Rua dos Pinheiros',
      numero: '787',
      cidade: 'Angra dos Reis',
      uf: 'RJ',
      complemento: 'Proximo ao DPO do Frade',
    },
  },
  {
    id: '2',
    nomeCompleto: 'Pedro',
    cpf: '12312312399',
    endereco: {
      cep: '23946085',
      rua: 'Rua dos Pinheiros',
      numero: '787',
      cidade: 'Angra dos Reis',
      uf: 'RJ',
      complemento: 'Proximo ao DPO do Frade',
    },
  },
  {
    id: '3',
    nomeCompleto: 'Antonio',
    cpf: '12312312399',
    endereco: {
      cep: '23946085',
      rua: 'Rua dos Pinheiros',
      numero: '787',
      cidade: 'Angra dos Reis',
      uf: 'RJ',
      complemento: 'Proximo ao DPO do Frade',
    },
  },
];

export const entregaEmpresaMock: IEntregaEmpresa[] = [
  {
    id: '1',
    remetente: 'empresa X',
    cnpj: '12312312399123',
    valor: 50,
    endereco: {
      cep: '23946085',
      rua: 'Rua dos Pinheiros',
      numero: '787',
      cidade: 'Angra dos Reis',
      uf: 'RJ',
      complemento: 'Proximo ao DPO do Frade',
    },
  },
  {
    id: '2',
    remetente: 'empresa Y',
    cnpj: '12312312399123',
    valor: 50,
    endereco: {
      cep: '23946085',
      rua: 'Rua dos Pinheiros',
      numero: '787',
      cidade: 'Angra dos Reis',
      uf: 'RJ',
      complemento: 'Proximo ao DPO do Frade',
    },
  },
];
