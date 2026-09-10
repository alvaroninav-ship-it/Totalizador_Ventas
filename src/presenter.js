import totalizador from "./totalizador.js";
const priceInput = document.querySelector("#precio");
const quantityInput = document.querySelector("#cantidad");
const stateInput = document.querySelector("#estado");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#resultado-div");
const categoriaInput = document.querySelector("#categoria");
const impuestoDiv = document.querySelector("#impuesto-div");
const descuentoDiv = document.querySelector("#descuento-div");
const envioDiv = document.querySelector("#envio-div");
const pesoVolumetricoInput = document.querySelector("#peso-volumetrico");
const tipoClienteInput = document.querySelector("#cliente");
const clienteDiv = document.querySelector("#tipo-cliente-div");
const descuentoFijoDiv = document.querySelector("#descuento-fijo-div");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const price = Number.parseFloat(priceInput.value);
  const quantity = Number.parseInt(quantityInput.value);
  const state = stateInput.value;
  const categoria = categoriaInput.value;
  const pesoVolumetrico = Number.parseFloat(pesoVolumetricoInput.value);
  const tipoCliente = tipoClienteInput.value;

  const totalizadorInstance = new totalizador(quantity, price, state, categoria, pesoVolumetrico, tipoCliente);
  div.innerHTML = "<p>" + totalizadorInstance.mostrarResultado() + "</p>";
  impuestoDiv.innerHTML = "<p>" + totalizadorInstance.getImpuesto() + "</p>";
  descuentoDiv.innerHTML = "<p>" + totalizadorInstance.obtenerDescuentoEnPesos() + "</p>";
  envioDiv.innerHTML ="<p>Costo de envío: $" +totalizadorInstance.calcularCostoEnvio() +"</p>";
  clienteDiv.innerHTML ="<p>Tipo de cliente: " +tipoCliente +"</p>";
  descuentoFijoDiv.innerHTML ="<p>Descuento fijo: $" +totalizadorInstance.obtenerDescuentoFijo() +"</p>";
});
