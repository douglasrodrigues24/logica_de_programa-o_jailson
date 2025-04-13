let codigo_empregado, ano_nascimento, ano_ingresso, ano_atual, idade, tempo_trabalho;

codigo_empregado = prompt("Digite o número do empregado (código): ");
ano_nascimento = parseInt(prompt("Digite o ano de nascimento do empregado: "));
ano_ingresso = parseInt(prompt("Digite o ano de ingresso na empresa: "));
ano_atual = parseInt(prompt("Digite o ano atual: "));

idade = ano_atual - ano_nascimento;
tempo_trabalho = ano_atual - ano_ingresso;

alert("Idade do empregado: " + idade);
alert("Tempo de trabalho: " + tempo_trabalho);

if (idade >= 65 || tempo_trabalho >= 30 || (idade >= 60 && tempo_trabalho >= 25)) {
    alert("Requerer aposentadoria");
} else {
    alert("Não requerer");
}
