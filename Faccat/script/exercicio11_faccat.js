let numCarrosVendidos = parseInt(prompt("Digite o número de carros vendidos: "))
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas: "))
let salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: "))
let comissaoPorCarro = parseFloat(prompt("Digite o valor da comissão por carro vendido: "))

let salarioFinal = salarioFixo + (numCarrosVendidos * comissaoPorCarro) + (valorTotalVendas * 0.05)

alert("O salário final do vendedor é: R$ " + salarioFinal)
