// exercicio2-1.ts
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
// Define a classe Funcionario
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    // Método para retornar uma descrição do funcionário
    Funcionario.prototype.descricao = function () {
        return "Nome: ".concat(this.nome, ", Cargo: ").concat(this.cargo, ", Sal\u00E1rio: R$").concat(this.salario.toFixed(2));
    };
    return Funcionario;
}());
// Define a subclasse Gerente que herda de Funcionario
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, cargo, salario, departamento) {
        var _this = _super.call(this, nome, cargo, salario) || this; // Chama o construtor da classe base
        _this.departamento = departamento;
        return _this;
    }
    // Método para retornar uma descrição detalhada do gerente
    Gerente.prototype.descricaoDetalhada = function () {
        return "".concat(_super.prototype.descricao.call(this), ", Departamento: ").concat(this.departamento);
    };
    return Gerente;
}(Funcionario));
// Exemplo de uso das classes
// Cria um funcionário
var funcionario = new Funcionario('Carlos Silva', 'Analista de Sistemas', 4000);
console.log(funcionario.descricao()); // Nome: Carlos Silva, Cargo: Analista de Sistemas, Salário: R$4000.00
// Cria um gerente
var gerente = new Gerente('Ana Costa', 'Gerente de TI', 8000, 'Tecnologia');
console.log(gerente.descricaoDetalhada()); // Nome: Ana Costa, Cargo: Gerente de TI, Salário: R$8000.00, Departamento: Tecnologia
