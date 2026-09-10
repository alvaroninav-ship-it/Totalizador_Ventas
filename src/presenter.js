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
const pesoVolumetricoInput = document.querySelector("#peso");
const tipoClienteInput = document.querySelector("#cliente");
const clienteDiv = document.querySelector("#tipo-cliente-div");
const descuentoFijoDiv = document.querySelector("#descuento-fijo-div");
const limpiarButton = document.querySelector("#limpiar-form-button");
limpiarButton.addEventListener("click", () => {
  priceInput.value = "";
  quantityInput.value = "";
  stateInput.value = "";
  categoriaInput.value = "";
  pesoVolumetricoInput.value = "";
  tipoClienteInput.value = "";
  div.innerHTML = "";
  impuestoDiv.innerHTML = "";
  descuentoDiv.innerHTML = "";
  envioDiv.innerHTML = "";
  clienteDiv.innerHTML = "";
  descuentoFijoDiv.innerHTML = "";
});
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const price = Number.parseFloat(priceInput.value);
  const quantity = Number.parseInt(quantityInput.value);
  const state = stateInput.value;
  const categoria = categoriaInput.value;
  const pesoVolumetrico = Number.parseFloat(pesoVolumetricoInput.value);
  const tipoCliente = tipoClienteInput.value;

  const totalizadorInstance = new totalizador(quantity, price, state, categoria, pesoVolumetrico, tipoCliente);
  const resultado = totalizadorInstance.mostrarResultado();
  div.innerHTML = `<p>${resultado}</p>`;
  if (totalizadorInstance.validar() === "") {

    const subtotal = totalizadorInstance.obtenerSubtotal();
    const porcentajeDescuento =totalizadorInstance.obtenerDescuento() * 100;
    const descuentoGeneral =totalizadorInstance.obtenerDescuentoEnPesos();

    descuentoDiv.innerHTML = `
    <p class="descuento">
    Subtotal ${subtotal.toFixed(2)}
    -$
  </p>
  <p class="descuento">
    Descuento por mayor (${porcentajeDescuento}%):
    -$${descuentoGeneral.toFixed(2)}
  </p>
`;

    const porcentajeCliente =totalizadorInstance.obtenerDescuentoCliente() * 100;

    clienteDiv.innerHTML = `<p><strong>Cliente:</strong> ${tipoCliente}<br><strong>Descuento en envío:</strong>${porcentajeCliente}%</p>`;


    const costoEnvioUnidad =totalizadorInstance.obtenerCostoEnvioPorUnidad();

    const costoEnvio =totalizadorInstance.calcularCostoEnvio();

    const descuentoEnvio =quantity * costoEnvioUnidad * totalizadorInstance.obtenerDescuentoCliente();

    envioDiv.innerHTML = envioDiv.innerHTML = `
  <div class="envio">
    <p><strong>Peso volumétrico:</strong> ${pesoVolumetrico}</p>

    <p>
      Costo de envío:
      $${costoEnvioUnidad.toFixed(2)}
      × ${quantity} unidades
      = $${(quantity * costoEnvioUnidad).toFixed(2)}
    </p>

    <p class="descuento">
      Descuento cliente (${porcentajeCliente}%):
      -$${descuentoEnvio.toFixed(2)}
    </p>

    <p>
      <strong>Envío final:</strong>
      $${costoEnvio.toFixed(2)}
    </p>
  </div>
`;

    const descuentoFijo =totalizadorInstance.obtenerDescuentoFijo();

    clienteDiv.innerHTML += `<p><strong>Descuento fijo:</strong>-$${descuentoFijo.toFixed(2)} </p>`;

    const porcentajeEstado =totalizadorInstance.obtenerImpuesto() * 100;

    const impuestoEstado =totalizadorInstance.calcularImpuesto(totalizadorInstance.obtenerSubtotal());

    const porcentajeCategoria =totalizadorInstance.obtenerImpuestoPorCategoria() * 100;

    const precioConDescuentos =totalizadorInstance.obtenerSubtotal()- totalizadorInstance.obtenerDescuentoEnPesos();

    const impuestoCategoria =precioConDescuentos *totalizadorInstance.obtenerImpuestoPorCategoria();

    impuestoDiv.innerHTML = `
  <p class="impuesto">
    Impuesto estatal (${porcentajeEstado}%):
    +$${impuestoEstado.toFixed(2)}
  </p>

  <p class="impuesto">
    Impuesto categoría (${porcentajeCategoria}%):
    +$${impuestoCategoria.toFixed(2)}
  </p>
`;
  }
});
