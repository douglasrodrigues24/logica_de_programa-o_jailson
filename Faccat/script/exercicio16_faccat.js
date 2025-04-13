let num_macas = parseInt(prompt("Digite o número de maçãs compradas:"));
let custo_total;

if (num_macas < 12) {
    custo_total = num_macas * 1.30;
} else {
    custo_total = num_macas * 1.00;
}

alert("O custo total da compra é: R$ " + custo_total.toFixed(2));
