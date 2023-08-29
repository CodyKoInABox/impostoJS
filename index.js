const entrada = require('./entrada.js')
const imposto = require('./imposto.js')


// ADICIONAR UM LOOP INFINITO AQUI DEPOIS

 
let currentFuncionario = entrada

currentFuncionario = imposto(currentFuncionario.nome, currentFuncionario.salario)

console.log('------------------------')
console.log('Nome: ' + currentFuncionario.nome)
console.log('Salario: ' + currentFuncionario.salario)
console.log('Taxa: ' + currentFuncionario.taxa.toFixed(1))
console.log('Liquido: ' + currentFuncionario.liquido.toFixed(2))
console.log('Desconto: ' + currentFuncionario.desconto.toFixed(2))
