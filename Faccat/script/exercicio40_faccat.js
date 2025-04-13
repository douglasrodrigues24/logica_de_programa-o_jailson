let descricao_produto;
let quantidade;
let preco_unitario;
let total;
let desconto;
let total_pagar;

descricao_produto = prompt("Digite a descrição do produto: ");
quantidade = parseInt(prompt("Digite a quantidade adquirida: "));
preco_unitario = parseFloat(prompt("Digite o preço unitário: "));

total = quantidade * preco_unitario;

if (quantidade <= 5) {
    desconto = total * 0.02;
} else if (quantidade <= 10) {
    desconto = total * 0.03;
} else {
    desconto = total * 0.05;
}

total_pagar = total - desconto;

alert("Total: R$ " + total.toFixed(2));
alert("Desconto: R$ " + desconto.toFixed(2));
alert("Total a pagar: R$ " + total_pagar.toFixed(2));
