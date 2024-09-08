import { Orcamento, calcularImposto, calcularDesconto } from './financeiro';

// Instanciar a classe Orcamento
const orcamento = new Orcamento(1000, ['Item 1', 'Item 2', 'Item 3']);

// Exibir o valor inicial
console.log(`Valor inicial: R$ ${orcamento.valorTotal}`);

// Aplicar imposto de 10%
orcamento.aplicarImposto(10);
console.log(`Após aplicar imposto de 10%: R$ ${orcamento.valorTotal}`);

// Aplicar desconto de 5%
orcamento.aplicarDesconto(5);
console.log(`Após aplicar desconto de 5%: R$ ${orcamento.valorTotal}`);
