let quantidade_atual = parseInt(prompt("Digite a quantidade atual em estoque:"));
let quantidade_maxima = parseInt(prompt("Digite a quantidade máxima em estoque:"));
let quantidade_minima = parseInt(prompt("Digite a quantidade mínima em estoque:"));

let quantidade_media = (quantidade_maxima + quantidade_minima) / 2;

if (quantidade_atual >= quantidade_media) {
    alert("Não efetuar compra");
} else {
    alert("Efetuar compra");
}
