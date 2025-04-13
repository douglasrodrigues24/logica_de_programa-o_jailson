let horas_trabalhadas = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
let salario_por_hora = parseFloat(prompt("Digite o valor do salário por hora:"));
let horas_regulares = 40 * 4;
let salario_total, horas_extras;

if (horas_trabalhadas > horas_regulares) {
    horas_extras = horas_trabalhadas - horas_regulares;
    salario_total = (horas_regulares * salario_por_hora) + (horas_extras * salario_por_hora * 1.5);
} else {
    salario_total = horas_trabalhadas * salario_por_hora;
}

alert("O salário total do funcionário é: R$ " + salario_total.toFixed(2));
