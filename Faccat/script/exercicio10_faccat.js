let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro: "))

let percentualDis = 28
let percentualImps = 45

let custoFinal = custoFabrica + (custoFabrica * percentualDis / 100) + (custoFabrica * percentualImps / 100)

alert("O custo final ao consumidor é: R$ " + custoFinal)
