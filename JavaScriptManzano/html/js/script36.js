let sexo = prompt("Informe o sexo da pessoa (M para masculino, F para feminino):").toUpperCase();
let nome = prompt("Informe o nome da pessoa:");

if (sexo === "M") {
    alert(`Ilmo Sr. ${nome}`);
} else if (sexo === "F") {
    alert(`Ilma Sra. ${nome}`);
} else {
    alert("Sexo inválido informado.");
}