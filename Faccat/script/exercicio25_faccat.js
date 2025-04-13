let numero_conta = parseInt(prompt("Digite o número da conta do cliente:"));
let saldo = parseFloat(prompt("Digite o saldo inicial da conta:"));
let debito = parseFloat(prompt("Digite o valor do débito:"));
let credito = parseFloat(prompt("Digite o valor do crédito:"));

let saldo_atual = saldo - debito + credito;

alert("O saldo atual da conta " + numero_conta + " é: R$ " + saldo_atual.toFixed(2));

if (saldo_atual >= 0) {
    alert("Saldo Positivo");
} else {
    alert("Saldo Negativo");
}
