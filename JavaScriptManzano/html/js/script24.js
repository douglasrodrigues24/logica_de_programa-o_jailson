let salario = parseFloat(prompt("Digite o salário atual do funcionário:"));
let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste (%):"));

let novoSalario = salario + (salario * (percentualReajuste / 100));

alert(`Novo salário após o reajuste: R$ ${novoSalario.toFixed(2)}`);