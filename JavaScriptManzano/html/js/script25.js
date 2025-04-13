let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
let votosCandidatoA = parseInt(prompt("Digite o número de votos para o candidato A:"));
let votosCandidatoB = parseInt(prompt("Digite o número de votos para o candidato B:"));
let votosCandidatoC = parseInt(prompt("Digite o número de votos para o candidato C:"));
let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
let votosBranco = parseInt(prompt("Digite o número de votos em branco:"));

let votosValidos = votosCandidatoA + votosCandidatoB + votosCandidatoC;
let percentualValidos = (votosValidos / totalEleitores) * 100;
let percentualA = (votosCandidatoA / totalEleitores) * 100;
let percentualB = (votosCandidatoB / totalEleitores) * 100;
let percentualC = (votosCandidatoC / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualBranco = (votosBranco / totalEleitores) * 100;

alert(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
alert(`Percentual de votos para o candidato A: ${percentualA.toFixed(2)}%`);
alert(`Percentual de votos para o candidato B: ${percentualB.toFixed(2)}%`);
alert(`Percentual de votos para o candidato C: ${percentualC.toFixed(2)}%`);
alert(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
alert(`Percentual de votos em branco: ${percentualBranco.toFixed(2)}%`);