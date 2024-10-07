function sequenciaFibonacci(numero) {
    let num1 = 0, num2 = 1;
    
    while (num1 <= numero) {
        if (num1 === numero) {
            return true;
        }
        let proximo = num1 + num2;
        num1 = num2;
        num2 = proximo;
    }
    return false;
}

function main() {
    const numero = parseInt(prompt("Informe um número: "), 10);
    if (sequenciaFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }
}

// Executa o programa
main();