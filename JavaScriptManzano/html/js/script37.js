let lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Digite o segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo:"));

// Verifica se é um triângulo válido
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        alert("Os lados formam um triângulo Equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("Os lados formam um triângulo Isósceles.");
    } else {
        alert("Os lados formam um triângulo Escaleno.");
    }
} else {
    alert("Os valores informados não formam um triângulo.");
}