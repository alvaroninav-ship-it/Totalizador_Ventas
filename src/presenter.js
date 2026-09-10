import totalizador from "./totalizador.js";
const priceInput = document.querySelector("#precio");
const quantityInput = document.querySelector("#cantidad");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const price = Number.parseInt(priceInput.value);
  const quantity = Number.parseInt(quantityInput.value);

  const totalizadorInstance = new totalizador(quantity, price);
  div.innerHTML = "<p>" + totalizadorInstance.mostrarResultado() + "</p>";
});
