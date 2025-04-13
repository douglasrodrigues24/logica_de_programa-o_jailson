let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

let delta = B * B - 4 * A * C;

if (A === 0) {
    alert("Não é uma equação do segundo grau.");
} else if (delta < 0) {
    alert("Não existem raízes reais.");
} else {
    let raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
    let raiz2 = (-B - Math.sqrt(delta)) / (2 * A);
    alert(`As raízes da equação são: ${raiz1} e ${raiz2}`);
}