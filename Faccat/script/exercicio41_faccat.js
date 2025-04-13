let nota1, nota2, nota3, media_exercicios, media_aproveitamento;
let conceito;

nota1 = parseFloat(prompt("Digite a primeira nota: "));
nota2 = parseFloat(prompt("Digite a segunda nota: "));
nota3 = parseFloat(prompt("Digite a terceira nota: "));
media_exercicios = parseFloat(prompt("Digite a média dos exercícios: "));

media_aproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + media_exercicios) / 7;

if (media_aproveitamento >= 9.0) {
    conceito = "A";
} else if (media_aproveitamento >= 7.5) {
    conceito = "B";
} else if (media_aproveitamento >= 6.0) {
    conceito = "C";
} else {
    conceito = "D";
}

alert("Média de Aproveitamento: " + media_aproveitamento.toFixed(2));
alert("Conceito: " + conceito);
