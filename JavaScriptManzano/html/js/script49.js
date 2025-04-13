alert("Exercício (b): Tabuada de 1 a 10 de um número");
let num = parseInt(prompt("Digite um número inteiro:"));
let j = 1;
do {
  alert(num + " x " + j + " = " + (num * j));
  j++;
} while (j <= 10);