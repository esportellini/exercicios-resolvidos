// Define o módulo Financeiro
export function calcularImposto(valor: number, taxa: number): number {
    return valor * (taxa / 100);
  }
  
  export function calcularDesconto(valor: number, taxa: number): number {
    return valor * (taxa / 100);
  }
  
  // Classe Orcamento exportada do módulo Financeiro
  export class Orcamento {
    valorTotal: number;
    itens: string[];
  
    constructor(valorTotal: number, itens: string[]) {
      this.valorTotal = valorTotal;
      this.itens = itens;
    }
  
    // Método para aplicar imposto
    aplicarImposto(taxa: number): void {
      const imposto = calcularImposto(this.valorTotal, taxa);
      this.valorTotal += imposto;
    }
  
    // Método para aplicar desconto
    aplicarDesconto(taxa: number): void {
      const desconto = calcularDesconto(this.valorTotal, taxa);
      this.valorTotal -= desconto;
    }
  }
  