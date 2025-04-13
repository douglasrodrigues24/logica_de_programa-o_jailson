alert("Exercício (i) - Fatorial de cada ímpar entre 1 e 10");

let c = 1;
do {
  if (c % 2 !== 0) {
    let fat2 = 1;
    let d = 1;
    do {
      fat2 *= d;
      d++;
    } while (d <= c);
    alert("Fatorial de " + c + " = " + fat2);
  }
  c++;
} while (c <= 10);