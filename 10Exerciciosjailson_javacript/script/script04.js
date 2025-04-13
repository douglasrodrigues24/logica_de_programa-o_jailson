let numero = parseInt(prompt("Digite um número para ver a tabuada:"));
let contador = 1;
let resultado = "";

do {
    resultado += numero + " x " + contador + " = " + (numero * contador) + "\n";
    contador = contador + 1;
} while (contador <= 10);

alert(resultado);
