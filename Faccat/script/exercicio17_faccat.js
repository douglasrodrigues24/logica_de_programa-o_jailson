let nota1 = parseFloat(prompt("Digite a nota da 1ª avaliação:"));
let nota2 = parseFloat(prompt("Digite a nota da 2ª avaliação:"));
let media = (nota1 + nota2) / 2;

alert("A média do aluno é: " + media.toFixed(2));

if (media >= 6) {
    alert("O aluno foi APROVADO!");
} else {
    alert("O aluno foi REPROVADO!");
}
