// Função genérica para encontrar o maior elemento em um array
function encontrarMaiorElemento(array) {
    if (array.length === 0) {
        throw new Error('O array não pode estar vazio');
    }
    var maiorElemento = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var elemento = array_1[_i];
        if (elemento > maiorElemento) {
            maiorElemento = elemento;
        }
    }
    return maiorElemento;
}
// Exemplo de uso:
var maiorNumero = encontrarMaiorElemento([10, 20, 30]);
console.log("O maior n\u00FAmero \u00E9: ".concat(maiorNumero)); // 30
var maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);
console.log("A maior palavra \u00E9: ".concat(maiorPalavra)); // 'zebra'
