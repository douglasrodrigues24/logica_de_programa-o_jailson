alert("Exercício (h): Soma do fatorial dos números ímpares (1 a 10)");
let somaFatorialImpares = 0;
let p = 1;
do {
  if (p % 2 !== 0) {
    // Calcula o fatorial de p
    let fatorial = 1;
    let q = 1;
    do {
      fatorial *= q;
      q++;
    } while (q <= p);
    somaFatorialImpares += fatorial;
  }
  p++;
} while (p <= 10);
alert("Soma do fatorial dos números ímpares de 1 a 10: " + somaFatorialImpares);
