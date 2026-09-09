import totalizador from "./totalizador.js";
const priceInput = document.querySelector("#precio");
const quantityInput = document.querySelector("#cantidad");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const price = Number.parseInt(priceInput.value);
  const quantity = Number.parseInt(quantityInput.value);

  div.innerHTML = "<p>" + totalizador(price, quantity) + "</p>";
});
