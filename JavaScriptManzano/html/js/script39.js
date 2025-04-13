alert("Exercício (b) - Somatório dos pares de 1 a 500");

let soma = 0;
let j = 1;
do {
  if (j % 2 === 0) {
    soma += j;
  }
  j++;
} while (j <= 500);

alert("A soma dos valores pares de 1 a 500 é: " + soma);
