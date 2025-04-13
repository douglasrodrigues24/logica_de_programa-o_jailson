let idade = parseInt(prompt("Digite a idade:"));

if (idade >= 1 && idade <= 9) {
    alert("Idade na faixa etária infantil.");
} else if (idade >= 10 && idade <= 17) {
    alert("Idade na faixa etária adolescente.");
} else if (idade >= 18 && idade <= 49) {
    alert("Idade na faixa etária adulta.");
} else if (idade >= 50 && idade <= 100) {
    alert("Idade na faixa etária idosa.");
} else {
    alert("Idade fora da faixa permitida ou inválida.");
}