let raio = parseFloat(prompt("Digite o raio da lata de óleo:"));
let altura = parseFloat(prompt("Digite a altura da lata de óleo:"));
let volumeLata = 3.14159 * Math.pow(raio, 2) * altura;
alert(`Volume da lata de óleo: ${volumeLata.toFixed(2)} unidades cúbicas`);