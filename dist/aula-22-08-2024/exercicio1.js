// exercicio1.ts
/**
 * Função que recebe um objeto Produto e um tipo de pagamento, e retorna uma mensagem com as informações.
 * @param produto - Objeto do tipo Produto com informações sobre o produto.
 * @param pagamento - Tipo de pagamento utilizado.
 * @returns Mensagem formatada com as informações do produto e a forma de pagamento.
 */
function gerarMensagem(produto, pagamento) {
    return "O produto ".concat(produto.nome, ", da categoria ").concat(produto.categoria, ", custa R$").concat(produto.preco.toFixed(2), ". A forma de pagamento escolhida \u00E9 ").concat(pagamento, ".");
}
// Exemplo de uso da função
var produtoExemplo = {
    nome: 'Notebook',
    preco: 3000,
    categoria: 'Eletrônicos'
};
var pagamentoExemplo = 'cartão';
console.log(gerarMensagem(produtoExemplo, pagamentoExemplo));
