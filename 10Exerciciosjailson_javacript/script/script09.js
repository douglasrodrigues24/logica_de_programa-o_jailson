let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let resultado = 1;
let contador = 1;

do {
    resultado *= contador;
    contador++;
} while (contador <= numero);

alert("O fatorial de " + numero + " é " + resultado);
