let tempo = parseFloat(prompt("Digite o tempo gasto na viagem (horas):"));
let velocidade = parseFloat(prompt("Digite a velocidade média da viagem (km/h):"));
let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;
alert(`Velocidade média: ${velocidade} km/h\nTempo gasto: ${tempo} horas\nDistância percorrida: ${distancia} km\nLitros usados: ${litrosUsados.toFixed(2)} L`);