let nome = prompt("Digite o nome:");
let sexo = prompt("Digite o sexo (M ou F):");
let altura = parseFloat(prompt("Digite a altura em metros (ex: 1.75):"));
let peso_ideal;

if (sexo === "M") {
    peso_ideal = (72.7 * altura) - 58;
} else {
    peso_ideal = (62.1 * altura) - 44.7;
}

alert(nome + ", o seu peso ideal é: " + peso_ideal.toFixed(2) + " kg");
