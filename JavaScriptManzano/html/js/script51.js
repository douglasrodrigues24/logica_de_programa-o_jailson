alert("Exercício (d): Números divisíveis por 4 de 1 a 200");
let contDiv4 = 0;
let l = 1;
do {
  if (l % 4 === 0) {
    alert(l + " é divisível por 4");
    contDiv4++;
  }
  l++;
} while (l <= 200);
alert("Total de números divisíveis por 4: " + contDiv4);