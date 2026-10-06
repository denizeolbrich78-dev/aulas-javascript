const prompt = require('prompt-sync')();


const calcFrete = valor => valor > 150 ? 'Frete Grátis' : 'Cobrar Frete'
let val = parseFloat(prompt("INSIRA O VALOR: "))
console.log(calcFrete(val))