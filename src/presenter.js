import totalizador from "./totalizador.js";
const priceInput = document.querySelector("#precio");
const quantityInput = document.querySelector("#cantidad");
const stateInput = document.querySelector("#estado");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");
const impuestoDiv = document.querySelector("#impuesto-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const price = Number.parseFloat(priceInput.value);
  const quantity = Number.parseInt(quantityInput.value);
  const state = stateInput.value;

  const totalizadorInstance = new totalizador(quantity, price, state);
  div.innerHTML = "<p>" + totalizadorInstance.mostrarResultado() + "</p>";
  impuestoDiv.innerHTML = "<p>" + totalizadorInstance.getImpuesto() + "</p>";
});
