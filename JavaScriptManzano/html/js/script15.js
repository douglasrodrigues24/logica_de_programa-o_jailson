let A = prompt("Digite o valor de A:");
let B = prompt("Digite o valor de B:");
alert(`Valores antes da troca: A = ${A}, B = ${B}`);
let temp = A;
A = B;
B = temp;
alert(`Valores depois da troca: A = ${A}, B = ${B}`);