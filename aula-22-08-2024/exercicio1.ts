// exercicio1.ts

// Define a interface Produto
interface Produto {
    nome: string;
    preco: number;
    categoria: string;
  }
  
  // Define o tipo de união FormaPagamento
  type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';
  
  /**
   * Função que recebe um objeto Produto e um tipo de pagamento, e retorna uma mensagem com as informações.
   * @param produto - Objeto do tipo Produto com informações sobre o produto.
   * @param pagamento - Tipo de pagamento utilizado.
   * @returns Mensagem formatada com as informações do produto e a forma de pagamento.
   */
  function gerarMensagem(produto: Produto, pagamento: FormaPagamento): string {
    return `O produto ${produto.nome}, da categoria ${produto.categoria}, custa R$${produto.preco.toFixed(2)}. A forma de pagamento escolhida é ${pagamento}.`;
  }
  
  // Exemplo de uso da função
  const produtoExemplo: Produto = {
    nome: 'Notebook',
    preco: 3000,
    categoria: 'Eletrônicos'
  };
  
  const pagamentoExemplo: FormaPagamento = 'cartão';
  
  console.log(gerarMensagem(produtoExemplo, pagamentoExemplo));
  