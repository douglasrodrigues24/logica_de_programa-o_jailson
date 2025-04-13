alert("Exercício (c) - Tabuada de um número");

let numero = parseInt(prompt("Digite um número para ver sua tabuada:"));
let k = 1;
do {
  alert(numero + " x " + k + " = " + (numero * k));
  k++;
} while (k <= 10);