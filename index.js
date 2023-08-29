const entrada = require('./entrada.js')
const imposto = require('./imposto.js')


// ADICIONAR UM LOOP INFINITO AQUI DEPOIS
 
let currentFuncionario = entrada

currentFuncionario = imposto(currentFuncionario.nome, currentFuncionario.salario)

console.log('------------------------')
console.log('Nome: ' + currentFuncionario.nome)
console.log('Salario: ' + currentFuncionario.salario)
console.log('Taxa: ' + currentFuncionario.taxa)
console.log('Liquido: ' + currentFuncionario.liquido)
console.log('Desconto: ' + currentFuncionario.desconto)



