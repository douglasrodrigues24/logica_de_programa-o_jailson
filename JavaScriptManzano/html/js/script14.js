let valorPrestacao = parseFloat(prompt("Digite o valor da prestação:"));
let taxa = parseFloat(prompt("Digite a taxa de juros (% ao mês):"));
let tempoAtraso = parseFloat(prompt("Digite o tempo de atraso (meses):"));
let prestacaoAtrasada = valorPrestacao + (valorPrestacao * (taxa / 100) * tempoAtraso);
alert(`Valor da prestação em atraso: R$ ${prestacaoAtrasada.toFixed(2)}`);