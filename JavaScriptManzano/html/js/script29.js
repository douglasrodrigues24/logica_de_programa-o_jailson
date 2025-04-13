let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let n3 = parseFloat(prompt("Digite a terceira nota:"));
let n4 = parseFloat(prompt("Digite a quarta nota:"));

let mediaAluno = (n1 + n2 + n3 + n4) / 4;

if (mediaAluno >= 7) {
    alert(`Média: ${mediaAluno.toFixed(2)}. Aprovado!`);
} else if (mediaAluno >= 3) {
    alert(`Média: ${mediaAluno.toFixed(2)}. Exame!`);
} else {
    alert(`Média: ${mediaAluno.toFixed(2)}. Reprovado!`);
}