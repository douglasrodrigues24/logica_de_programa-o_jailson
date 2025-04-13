let litros_vendidos = parseFloat(prompt("Digite o número de litros vendidos:"));
let tipo_combustivel = prompt("Digite o tipo de combustível (A-álcool, G-gasolina):");
let preco_litro, desconto, valor_bruto, valor_total;

if (tipo_combustivel === "A" || tipo_combustivel === "a") {
    preco_litro = 2.90;
    if (litros_vendidos <= 20) {
        desconto = 0.03;
    } else {
        desconto = 0.05;
    }
} else if (tipo_combustivel === "G" || tipo_combustivel === "g") {
    preco_litro = 3.30;
    if (litros_vendidos <= 20) {
        desconto = 0.04;
    } else {
        desconto = 0.06;
    }
}

valor_bruto = litros_vendidos * preco_litro;
valor_total = valor_bruto - (valor_bruto * desconto);

alert("O valor a ser pago é: R$ " + valor_total.toFixed(2));
