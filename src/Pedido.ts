// Pedido.ts

import { Cliente } from './Cliente';

export class Pedido {
  cliente: Cliente;
  produto: string;
  valor: number;

  constructor(cliente: Cliente, produto: string, valor: number) {
    this.cliente = cliente;
    this.produto = produto;
    this.valor = valor;
  }

  // Método para exibir informações do pedido
  exibirInformacoes(): void {
    console.log(`Cliente: ${this.cliente.nome}`);
    console.log(`Produto: ${this.produto}`);
    console.log(`Valor: R$${this.valor.toFixed(2)}`);
  }
}
