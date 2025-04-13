alert("Exercício (i): Fatorial de um valor");
let valor = parseInt(prompt("Digite um número inteiro para calcular seu fatorial:"));
if (isNaN(valor) || valor < 0) {
  alert("Valor inválido. Digite um número inteiro não negativo.");
} else {
  let fatorial = 1;
  let r = 1;
  do {
    fatorial *= r;
    r++;
  } while (r <= valor);
  alert("O fatorial de " + valor + " é: " + fatorial);
}
