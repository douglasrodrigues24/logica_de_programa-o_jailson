let anos = parseInt(prompt("Digite os anos: "));
let meses = parseInt(prompt("Digite os meses: "));
let dias = parseInt(prompt("Digite os dias: "));

let idadeEmDias = (anos * 365) + (meses * 30) + dias;

alert("A idade em dias é: " + idadeEmDias);