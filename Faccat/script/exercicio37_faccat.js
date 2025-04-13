let kg_morango = parseFloat(prompt("Digite a quantidade de morangos (Kg):"));
let kg_maca = parseFloat(prompt("Digite a quantidade de maçãs (Kg):"));

let preco_morango, preco_maca;
let valor_morango, valor_maca, total;

if (kg_morango <= 5) {
    preco_morango = 2.50;
} else {
    preco_morango = 2.20;
}

if (kg_maca <= 5) {
    preco_maca = 1.80;
} else {
    preco_maca = 1.50;
}

valor_morango = kg_morango * preco_morango;
valor_maca = kg_maca * preco_maca;

total = valor_morango + valor_maca;

if ((kg_morango + kg_maca > 8) || (total > 25.00)) {
    total = total - (total * 0.10);
}

alert("O valor a ser pago pelo cliente é: R$ " + total.toFixed(2));
