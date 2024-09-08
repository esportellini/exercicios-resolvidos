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
exports.buscarDadosDaAPI = buscarDadosDaAPI;
// Função assíncrona que simula a busca de dados em uma API
function buscarDadosDaAPI() {
    return __awaiter(this, void 0, void 0, function* () {
        // Retorna uma nova Promise
        return new Promise((resolve, reject) => {
            // Simula um tempo de espera (por exemplo, 2 segundos)
            setTimeout(() => {
                // Simula um sucesso ou erro aleatório
                const sucesso = Math.random() > 0.2; // 80% de chance de sucesso
                if (sucesso) {
                    resolve('Dados recebidos com sucesso!');
                }
                else {
                    reject(new Error('Falha na busca de dados.'));
                }
            }, 2000);
        });
    });
}
