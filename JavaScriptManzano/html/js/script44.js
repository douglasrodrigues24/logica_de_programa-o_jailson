alert("Exercício (g) - Soma do fatorial dos ímpares entre 1 e 10");

let somaFatorialImpares = 0;
let x = 1;

do {
  if (x % 2 !== 0) {
    // Calcula o fatorial de x
    let fat = 1;
    let y = 1;
    do {
      fat *= y;
      y++;
    } while (y <= x);

    // Soma ao acumulador
    somaFatorialImpares += fat;
  }
  x++;
} while (x <= 10);

alert("Soma do fatorial dos ímpares entre 1 e 10 = " + somaFatorialImpares);

