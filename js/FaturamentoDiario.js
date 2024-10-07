async function buscaDados () {
   const response = await fetch('./dados.json')
   const dados = await response.json()
   console.log(dados)

   return dados
}

async function processarDados(){    
    
    const dados = await buscaDados()
    let soma = 0;
    let count = 0;
    dados.forEach(item => {
        if (item.valor > 0) {
            soma += item.valor;
            count++;
        }
    });
    const media = soma / count;
    console.log(`Média Faturamento: ${media}`);
    
    let menorValor = Math.min(...dados.map(item => item.valor));
    let maiorValor = Math.max(...dados.map(item => item.valor));
    console.log(`Menor Faturamento: ${menorValor}.`);
    console.log(`Maior Faturamento: ${maiorValor}.`);
    return media;
}
processarDados();
