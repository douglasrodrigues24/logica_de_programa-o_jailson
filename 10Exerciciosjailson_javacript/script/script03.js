let numero;
let soma = 0;

do {
    numero = parseInt(prompt("Digite um número positivo (ou negativo para parar):"));
    if (numero >= 0) {
        soma = soma + numero;
    }
} while (numero >= 0);

alert("A soma total é: " + soma);
