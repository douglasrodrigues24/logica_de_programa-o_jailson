let maiorNumero = Number.MIN_VALUE;
let menorNumero = Number.MAX_VALUE;

for (let i = 1; i <= 5; i++) {
    let numeroLido = parseInt(prompt(`Digite o número ${i}:`));
    if (numeroLido > maiorNumero) maiorNumero = numeroLido;
    if (numeroLido < menorNumero) menorNumero = numeroLido;
}

alert(`Maior número: ${maiorNumero}`);
alert(`Menor número: ${menorNumero}`);