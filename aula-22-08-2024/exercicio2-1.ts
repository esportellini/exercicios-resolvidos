// exercicio2-1.ts

// Define a classe Funcionario
class Funcionario {
    nome: string;
    cargo: string;
    salario: number;
  
    constructor(nome: string, cargo: string, salario: number) {
      this.nome = nome;
      this.cargo = cargo;
      this.salario = salario;
    }
  
    // Método para retornar uma descrição do funcionário
    descricao(): string {
      return `Nome: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
  }
  
  // Define a subclasse Gerente que herda de Funcionario
  class Gerente extends Funcionario {
    departamento: string;
  
    constructor(nome: string, cargo: string, salario: number, departamento: string) {
      super(nome, cargo, salario); // Chama o construtor da classe base
      this.departamento = departamento;
    }
  
    // Método para retornar uma descrição detalhada do gerente
    descricaoDetalhada(): string {
      return `${super.descricao()}, Departamento: ${this.departamento}`;
    }
  }
  
  // Exemplo de uso das classes
  
  // Cria um funcionário
  const funcionario = new Funcionario('Carlos Silva', 'Analista de Sistemas', 4000);
  console.log(funcionario.descricao()); // Nome: Carlos Silva, Cargo: Analista de Sistemas, Salário: R$4000.00
  
  // Cria um gerente
  const gerente = new Gerente('Ana Costa', 'Gerente de TI', 8000, 'Tecnologia');
  console.log(gerente.descricaoDetalhada()); // Nome: Ana Costa, Cargo: Gerente de TI, Salário: R$8000.00, Departamento: Tecnologia
  