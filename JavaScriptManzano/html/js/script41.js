alert("Exercício (d) - Números divisíveis por 4 de 1 a 200");

let contador = 0;
let l = 1;
do {
  if (l % 4 === 0) {
    alert(l + " é divisível por 4");
    contador++;
  }
  l++;
} while (l <= 200);

alert("Quantidade de números divisíveis por 4: " + contador);