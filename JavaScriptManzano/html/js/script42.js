alert("Exercício (e) - Cálculo de potência");

let base = parseInt(prompt("Digite a base:"));
let exp = parseInt(prompt("Digite o expoente:"));
let resultado = 1;
let cont = 1;

do {
  resultado *= base;
  cont++;
} while (cont <= exp);

alert(base + " ^ " + exp + " = " + resultado);