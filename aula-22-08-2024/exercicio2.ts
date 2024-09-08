// exercicio2.ts

// Define o tipo Pessoa
type Pessoa = {
    nome: string;
    idade: number;
  };
  
  // Define o tipo Empregado
  type Empregado = {
    empresa: string;
    salario: number;
  };
  
  // Define o tipo combinado PessoaEmpregado
  type PessoaEmpregado = Pessoa & Empregado;
  
  /**
   * Função que recebe um objeto do tipo PessoaEmpregado e retorna uma mensagem com as informações.
   * @param pessoaEmpregado - Objeto do tipo PessoaEmpregado com informações sobre a pessoa e o emprego.
   * @returns Mensagem formatada com as informações da pessoa e do emprego.
   */
  function descreverPessoaEmpregado(pessoaEmpregado: PessoaEmpregado): string {
    return `Nome: ${pessoaEmpregado.nome}, Idade: ${pessoaEmpregado.idade}, Empresa: ${pessoaEmpregado.empresa}, Salário: R$${pessoaEmpregado.salario.toFixed(2)}`;
  }
  
  // Exemplo de uso da função
  const pessoaEmpregadoExemplo: PessoaEmpregado = {
    nome: 'Ana Souza',
    idade: 30,
    empresa: 'Tech Solutions',
    salario: 5000
  };
  
  console.log(descreverPessoaEmpregado(pessoaEmpregadoExemplo));
  