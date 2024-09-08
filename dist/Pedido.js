"use strict";
// Pedido.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor(cliente, produto, valor) {
        this.cliente = cliente;
        this.produto = produto;
        this.valor = valor;
    }
    // Método para exibir informações do pedido
    exibirInformacoes() {
        console.log(`Cliente: ${this.cliente.nome}`);
        console.log(`Produto: ${this.produto}`);
        console.log(`Valor: R$${this.valor.toFixed(2)}`);
    }
}
exports.Pedido = Pedido;
