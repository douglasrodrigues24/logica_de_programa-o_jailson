let codigo_usuario = parseInt(prompt("Digite o código do usuário:"));

if (codigo_usuario !== 1234) {
    alert("Usuário inválido!");
} else {
    let senha = parseInt(prompt("Digite a senha:"));

    if (senha !== 9999) {
        alert("Senha incorreta");
    } else {
        alert("Acesso permitido");
    }
}
