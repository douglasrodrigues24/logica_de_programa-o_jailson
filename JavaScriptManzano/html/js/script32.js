let numeroDivisivel = parseInt(prompt("Digite um número para verificar divisibilidade por 2 e por 3:"));

if (numeroDivisivel % 2 === 0 && numeroDivisivel % 3 === 0) {
    alert("O número é divisível por 2 e por 3.");
} else {
    alert("O número NÃO é divisível por 2 e por 3.");
}