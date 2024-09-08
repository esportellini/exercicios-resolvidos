// exercicio2.ts
/**
 * Função que recebe um objeto do tipo PessoaEmpregado e retorna uma mensagem com as informações.
 * @param pessoaEmpregado - Objeto do tipo PessoaEmpregado com informações sobre a pessoa e o emprego.
 * @returns Mensagem formatada com as informações da pessoa e do emprego.
 */
function descreverPessoaEmpregado(pessoaEmpregado) {
    return "Nome: ".concat(pessoaEmpregado.nome, ", Idade: ").concat(pessoaEmpregado.idade, ", Empresa: ").concat(pessoaEmpregado.empresa, ", Sal\u00E1rio: R$").concat(pessoaEmpregado.salario.toFixed(2));
}
// Exemplo de uso da função
var pessoaEmpregadoExemplo = {
    nome: 'Ana Souza',
    idade: 30,
    empresa: 'Tech Solutions',
    salario: 5000
};
console.log(descreverPessoaEmpregado(pessoaEmpregadoExemplo));
