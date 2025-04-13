let valor1 = parseInt(prompt("Digite o primeiro valor:"));
let valor2 = parseInt(prompt("Digite o segundo valor:"));

let maior = Math.max(valor1, valor2);
let menor = Math.min(valor1, valor2);
let diferenca = maior - menor;

alert(`A diferença entre o maior (${maior}) e o menor (${menor}) valor é: ${diferenca}`);