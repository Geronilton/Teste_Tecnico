
function inverterString(str) {
    let stringInvertida = ''; 

    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; 
    }

    return stringInvertida;
}

const entrada = prompt('Digite uma palavra pra inverte:'); 
const resultado = inverterString(entrada);

console.log(`String original: ${entrada}`);
console.log(`String invertida: ${resultado}`);