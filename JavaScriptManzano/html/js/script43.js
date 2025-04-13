alert("Exercício (f) - Fatorial de um valor");

let valor = parseInt(prompt("Digite um valor para calcular o fatorial:"));
let fatorial = 1;
let m = 1;

do {
  fatorial *= m;
  m++;
} while (m <= valor);

alert("Fatorial de " + valor + " = " + fatorial);