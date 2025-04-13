alert("Exercício (f): Conversão de Celsius para Fahrenheit");
let celsius = 10;
do {
  let fahrenheit = (9/5) * celsius + 32;
  alert(celsius + "°C = " + fahrenheit.toFixed(1) + "°F");
  celsius += 10;
} while (celsius <= 100);