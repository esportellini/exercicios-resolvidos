// index.ts

import { Cliente } from './Cliente';
import { Pedido } from './Pedido';

// Cria um cliente
const cliente = new Cliente('Lucas Pereira', 'lucas.pereira@example.com');

// Cria um pedido
const pedido = new Pedido(cliente, 'Notebook', 2999.99);

// Exibe as informações do pedido
pedido.exibirInformacoes();
