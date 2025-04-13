let valores = [];

valores.push(parseInt(prompt("Digite o primeiro valor:")));
valores.push(parseInt(prompt("Digite o segundo valor:")));
valores.push(parseInt(prompt("Digite o terceiro valor:")));

valores.sort((a, b) => a - b);
alert(`Valores em ordem crescente: ${valores.join(", ")}`);
