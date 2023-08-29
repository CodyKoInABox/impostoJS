const prompt = require('prompt-sync')()

function criarFuncionario(){

    let nome = prompt("Insira o nome do funcionario: ")
    let salario = prompt(`Insira o salario de ${nome}: `)

    return {nome, salario}
}


module.exports = criarFuncionario()

