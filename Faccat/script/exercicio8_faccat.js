let totalEleitores = parseInt(prompt("Digite o total de eleitores: "))
let votosBrancos = parseInt(prompt("Digite o número de votos brancos: "))
let votosNulos = parseInt(prompt("Digite o número de votos nulos: "))
let votosValidos = parseInt(prompt("Digite o número de votos válidos: "))

let percBrancos = (votosBrancos * 100) / totalEleitores
let percNulos = (votosNulos * 100) / totalEleitores
let percValidos = (votosValidos * 100) / totalEleitores

alert("Percentual de votos brancos: " + percBrancos + "%")
alert("Percentual de votos nulos: " + percNulos + "%")
alert("Percentual de votos válidos: " + percValidos + "%")
