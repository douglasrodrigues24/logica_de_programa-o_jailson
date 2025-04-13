alert("Exercício (j): Sequência de Fibonacci");
let termos = parseInt(prompt("Digite quantos termos da sequência de Fibonacci você deseja ver:"));
if (isNaN(termos) || termos <= 0) {
  alert("Por favor, digite um número inteiro positivo.");
} else {
  let fib1 = 0, fib2 = 1;
  let count = 1;
  // Exibe o primeiro termo
  alert("Termo " + count + ": " + fib1);
  count++;
  if (termos >= 2) {
    alert("Termo " + count + ": " + fib2);
    count++;
  }
  do {
    let fib3 = fib1 + fib2;
    alert("Termo " + count + ": " + fib3);
    // Atualiza os valores para os próximos termos
    fib1 = fib2;
    fib2 = fib3;
    count++;
  } while (count <= termos);
}