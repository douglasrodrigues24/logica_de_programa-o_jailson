let palavra;

do {
    let contadorVogais = 0;
    palavra = prompt("Digite uma palavra (ou 'sair' para encerrar):");

    if (palavra.toLowerCase() !== "sair") {
        for (let i = 0; i < palavra.length; i++) {
            let letra = palavra[i].toLowerCase();
            if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
                contadorVogais++;
            }
        }
        alert("A palavra " + palavra + " tem " + contadorVogais + " vogais.");
    }

} while (palavra.toLowerCase() !== "sair");
