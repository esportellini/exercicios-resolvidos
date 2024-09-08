"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const buscarDadosDaAPI_1 = require("./buscarDadosDaAPI");
// Função assíncrona para executar a busca e tratar erros
function executarBusca() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dados = yield (0, buscarDadosDaAPI_1.buscarDadosDaAPI)();
            console.log(dados); // Exibe os dados recebidos
        }
        catch (error) {
            if (error instanceof Error) {
                // Verifica se error é uma instância de Error
                console.error('Erro ao buscar dados:', error.message); // Exibe a mensagem de erro
            }
            else {
                // Caso o erro não seja uma instância de Error
                console.error('Erro desconhecido ao buscar dados:', error);
            }
        }
    });
}
// Chama a função para simular a busca de dados
executarBusca();
