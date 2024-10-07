const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};

function percentual() {
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    const percentualPorEstado = {};

    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / totalFaturamento) * 100;
        percentualPorEstado[estado] = percentual.toFixed(2);
    }

    console.log("Percentual de representação por estado:");
    for (const estado in percentualPorEstado) {
        console.log(`${estado}: ${percentualPorEstado[estado]}%`);
    }
}
percentual();