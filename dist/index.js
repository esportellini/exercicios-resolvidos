"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const Pedido_1 = require("./Pedido");
// Cria um cliente
const cliente = new Cliente_1.Cliente('Lucas Pereira', 'lucas.pereira@example.com');
// Cria um pedido
const pedido = new Pedido_1.Pedido(cliente, 'Notebook', 2999.99);
// Exibe as informações do pedido
pedido.exibirInformacoes();
