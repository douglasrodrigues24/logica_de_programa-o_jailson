valorTotal = parseFloat(prompt("Digite o valor total do bem:"));
entrada = parseFloat(prompt("Digite o valor da entrada:"));
restante = valorTotal - entrada;
parcelas = restante / 3;
alert(`Valor das parcelas: R$ ${parcelas.toFixed(2)} cada`);
