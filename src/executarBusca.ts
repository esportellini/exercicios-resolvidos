import { buscarDadosDaAPI } from './buscarDadosDaAPI';

// Função assíncrona para executar a busca e tratar erros
async function executarBusca() {
  try {
    const dados = await buscarDadosDaAPI();
    console.log(dados); // Exibe os dados recebidos
  } catch (error) {
    if (error instanceof Error) {
      // Verifica se error é uma instância de Error
      console.error('Erro ao buscar dados:', error.message); // Exibe a mensagem de erro
    } else {
      // Caso o erro não seja uma instância de Error
      console.error('Erro desconhecido ao buscar dados:', error);
    }
  }
}

// Chama a função para simular a busca de dados
executarBusca();
