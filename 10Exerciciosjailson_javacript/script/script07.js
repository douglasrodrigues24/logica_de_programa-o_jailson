let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let palpite;

do {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
} while (palpite !== numeroSecreto);

alert("Parabéns! Você acertou!");
