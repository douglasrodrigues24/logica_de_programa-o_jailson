let termos = parseInt(prompt("Digite a quantidade de termos da sequência de Fibonacci:"));

if (isNaN(termos) || termos <= 0) {
  alert("Por favor, digite um número inteiro positivo.");
} else {
  let contador = 1;
  let fib1 = 0;
  let fib2 = 1;
  
  // Exibe o primeiro termo se solicitado
  alert("Termo 1: " + fib1);
  
  // Se o usuário quiser mais de um termo, exibe o segundo termo
  if (termos >= 2) {
    alert("Termo 2: " + fib2);
    contador = 3;
  }
  
  // Gera e exibe os termos restantes
  do {
    let fib3 = fib1 + fib2;
    alert("Termo " + contador + ": " + fib3);
    // Atualiza para os próximos termos
    fib1 = fib2;
    fib2 = fib3;
    contador++;
  } while (contador <= termos);
}