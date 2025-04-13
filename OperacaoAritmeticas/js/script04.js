let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

if (num2 !== 0) {
    let divisao = num1 / num2;
    alert("A divisão dos números é: " + divisao);
} else {
    alert("Não é possível dividir por zero!");
}
