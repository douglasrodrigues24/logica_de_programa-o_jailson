alert("Exercício (h) - Tabuada de 1 a 10");

let a = 1;
do {
  let b = 1;
  do {
    alert(a + " x " + b + " = " + (a * b));
    b++;
  } while (b <= 10);
  a++;
} while (a <= 10);

