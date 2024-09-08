// exercicio2-2.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Define a classe ContaBancaria
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    // Método para exibir o saldo atual da conta
    ContaBancaria.prototype.exibirSaldo = function () {
        console.log("Saldo atual: R$".concat(this.saldo.toFixed(2)));
    };
    return ContaBancaria;
}());
// Define a subclasse ContaCorrente que herda de ContaBancaria
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(titular, saldo, limiteCredito) {
        var _this = _super.call(this, titular, saldo) || this; // Chama o construtor da classe base
        _this.limiteCredito = limiteCredito;
        return _this;
    }
    // Sobrescreve o método exibirSaldo para incluir o limite de crédito
    ContaCorrente.prototype.exibirSaldo = function () {
        var saldoTotal = this.saldo + this.limiteCredito;
        console.log("Saldo total dispon\u00EDvel (incluindo limite de cr\u00E9dito): R$".concat(saldoTotal.toFixed(2)));
    };
    return ContaCorrente;
}(ContaBancaria));
// Exemplo de uso das classes
// Cria uma conta bancária
var contaBancaria = new ContaBancaria('Maria Oliveira', 1500);
contaBancaria.exibirSaldo(); // Saldo atual: R$1500.00
// Cria uma conta corrente
var contaCorrente = new ContaCorrente('José Santos', 2000, 500);
contaCorrente.exibirSaldo(); // Saldo total disponível (incluindo limite de crédito): R$2500.00
