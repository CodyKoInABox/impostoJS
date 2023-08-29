class Funcionario{
    constructor(nome, salario, taxa, liquido){
        this.nome = nome,
        this.salario = salario,
        this.taxa = taxa,
        this.liquido = liquido,
        this.desconto = salario - liquido
    }
}

module.exports = function calcular(nome, salario){
    let taxa = 11;

    if(salario > 2500){
        taxa = taxa + 8
    }else{
        taxa = taxa + 5
    }

    let liquido = salario * ((100-taxa) / 100)

    return new Funcionario(nome, salario, taxa, liquido)
}
