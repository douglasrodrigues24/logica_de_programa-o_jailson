let soma = 0;
let contador = 0;
let nota;
let resultado = "";

do {
    nota = parseFloat(prompt("Digite uma nota de 0 a 10 (ou outra para sair):"));
    
    if (nota >= 0 && nota <= 10) {
        soma += nota;
        contador++;
    }
} while (nota >= 0 && nota <= 10);

if (contador > 0) {
    resultado = "A média das notas é: " + (soma / contador).toFixed(2);
} else {
    resultado = "Nenhuma nota válida foi inserida.";
}

alert(resultado);
