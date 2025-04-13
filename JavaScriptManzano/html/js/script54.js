alert("Exercício (g): Soma do fatorial dos números pares (1 a 10)");
let somaFatorialPares = 0;
let n = 1;
do {
  if (n % 2 === 0) {
    // Calcula o fatorial de n
    let fatorial = 1;
    let f = 1;
    do {
      fatorial *= f;
      f++;
    } while (f <= n);
    somaFatorialPares += fatorial;
  }
  n++;
} while (n <= 10);
alert("Soma do fatorial dos números pares de 1 a 10: " + somaFatorialPares);
