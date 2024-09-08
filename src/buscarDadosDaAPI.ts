// Função assíncrona que simula a busca de dados em uma API
async function buscarDadosDaAPI(): Promise<string> {
    // Retorna uma nova Promise
    return new Promise((resolve, reject) => {
      // Simula um tempo de espera (por exemplo, 2 segundos)
      setTimeout(() => {
        // Simula um sucesso ou erro aleatório
        const sucesso = Math.random() > 0.2; // 80% de chance de sucesso
        
        if (sucesso) {
          resolve('Dados recebidos com sucesso!');
        } else {
          reject(new Error('Falha na busca de dados.'));
        }
      }, 2000);
    });
  }
  
  export { buscarDadosDaAPI };
  