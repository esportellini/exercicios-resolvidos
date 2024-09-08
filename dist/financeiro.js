"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orcamento = void 0;
exports.calcularImposto = calcularImposto;
exports.calcularDesconto = calcularDesconto;
// Define o módulo Financeiro
function calcularImposto(valor, taxa) {
    return valor * (taxa / 100);
}
function calcularDesconto(valor, taxa) {
    return valor * (taxa / 100);
}
// Classe Orcamento exportada do módulo Financeiro
class Orcamento {
    constructor(valorTotal, itens) {
        this.valorTotal = valorTotal;
        this.itens = itens;
    }
    // Método para aplicar imposto
    aplicarImposto(taxa) {
        const imposto = calcularImposto(this.valorTotal, taxa);
        this.valorTotal += imposto;
    }
    // Método para aplicar desconto
    aplicarDesconto(taxa) {
        const desconto = calcularDesconto(this.valorTotal, taxa);
        this.valorTotal -= desconto;
    }
}
exports.Orcamento = Orcamento;
