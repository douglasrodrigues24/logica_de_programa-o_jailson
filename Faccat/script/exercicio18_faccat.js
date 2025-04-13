let ano_atual = parseInt(prompt("Digite o ano atual:"));
let ano_nascimento = parseInt(prompt("Digite o ano de nascimento da pessoa:"));
let idade = ano_atual - ano_nascimento;

if (idade >= 16) {
    alert("A pessoa pode votar este ano!");
} else {
    alert("A pessoa não pode votar este ano!");
}
