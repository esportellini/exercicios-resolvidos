// exercicio2-2.ts

// Define a classe ContaBancaria
class ContaBancaria {
    titular: string;
    saldo: number;
  
    constructor(titular: string, saldo: number) {
      this.titular = titular;
      this.saldo = saldo;
    }
  
    // Método para exibir o saldo atual da conta
    exibirSaldo(): void {
      console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
    }
  }
  
  // Define a subclasse ContaCorrente que herda de ContaBancaria
  class ContaCorrente extends ContaBancaria {
    limiteCredito: number;
  
    constructor(titular: string, saldo: number, limiteCredito: number) {
      super(titular, saldo); // Chama o construtor da classe base
      this.limiteCredito = limiteCredito;
    }
  
    // Sobrescreve o método exibirSaldo para incluir o limite de crédito
    exibirSaldo(): void {
      const saldoTotal = this.saldo + this.limiteCredito;
      console.log(`Saldo total disponível (incluindo limite de crédito): R$${saldoTotal.toFixed(2)}`);
    }
  }
  
  // Exemplo de uso das classes
  
  // Cria uma conta bancária
  const contaBancaria = new ContaBancaria('Maria Oliveira', 1500);
  contaBancaria.exibirSaldo(); // Saldo atual: R$1500.00
  
  // Cria uma conta corrente
  const contaCorrente = new ContaCorrente('José Santos', 2000, 500);
  contaCorrente.exibirSaldo(); // Saldo total disponível (incluindo limite de crédito): R$2500.00
  