let valorTotal = parseFloat(prompt("Digite o valor total do bem:"));
let entrada = parseFloat(prompt("Digite o valor da entrada:"));
let restante = valorTotal - entrada;
let parcelas = restante / 2;
alert(`Valor das parcelas: R$ ${parcelas.toFixed(2)} cada`);