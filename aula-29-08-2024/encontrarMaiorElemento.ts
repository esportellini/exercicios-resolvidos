// Função genérica para encontrar o maior elemento em um array
function encontrarMaiorElemento<T extends string | number>(array: T[]): T {
    if (array.length === 0) {
      throw new Error('O array não pode estar vazio');
    }
  
    let maiorElemento = array[0];
  
    for (const elemento of array) {
      if (elemento > maiorElemento) {
        maiorElemento = elemento;
      }
    }
  
    return maiorElemento;
  }
  
  // Exemplo de uso:
  const maiorNumero = encontrarMaiorElemento([10, 20, 30]);
  console.log(`O maior número é: ${maiorNumero}`);  // 30
  
  const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);
  console.log(`A maior palavra é: ${maiorPalavra}`);  // 'zebra'
  