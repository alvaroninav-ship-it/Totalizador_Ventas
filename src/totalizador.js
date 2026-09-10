const estados=[{value: "UT", impuesto: 0.0665},{value: "NV", impuesto: 0.08},{value: "TX", impuesto: 0.0625},{value: "AL", impuesto: 0.04}, {value: "CA", impuesto: 0.0825}]

const categorias = [
  { value: "Alimentos", descuento: 0.02,impuesto: 0.00 },
  { value: "Varios", descuento: 0.00, impuesto: 0.00 },
  { value: "Bebidas alcohólicas", descuento: 0.00,impuesto: 0.07 },
  { value: "Material de escritorio", descuento: 0.015,impuesto: 0.00 },
  { value: "Muebles", descuento: 0.0,impuesto: 0.03 },
  { value: "Electrónicos", descuento: 0.01,impuesto: 0.04 },
  { value: "Vestimenta", descuento: 0.0,impuesto: 0.02 },
];
const tiposCliente = [
    { value: "Normal", descuento: 0.00 },
    { value: "Recurrente", descuento: 0.005 },
    { value: "Antiguo Recurrente", descuento: 0.01 },
    { value: "Especial", descuento: 0.015 }
]


class Totalizador {
  constructor(cantidad, precio, estado, categoria="Varios",pesoVolumetrico=0, tipoCliente="Normal") {
    this.cantidad = cantidad;
    this.precio = precio;
    this.estado = estado;
    this.categoria = categoria;
    this.pesoVolumetrico = pesoVolumetrico;
    this.tipoCliente = tipoCliente;
  }

  obtenerDescuentoPorCategoria() {
    const categoria = categorias.find(c => c.value === this.categoria);
    if (categoria) {
      return categoria.descuento;
    }
    return 0;
  }
  obtenerDescuentoCliente() {
    const cliente = tiposCliente.find(
        c => c.value === this.tipoCliente
    );

    if (cliente) {
        return cliente.descuento;
    }

    return 0;
    }
    obtenerDescuentoFijo() {

    const precioNeto = this.obtenerSubtotal()
        - this.obtenerDescuentoEnPesos();

    if (
        this.tipoCliente === "Recurrente" &&
        precioNeto > 3000 &&
        this.categoria === "Alimentos"
    ) {
        return 100;
    }
    if (
        this.tipoCliente === "Especial" &&
        precioNeto > 7000 &&
        this.categoria === "Electrónicos"
    ) {
        return 200;
    }
    return 0;
    }
  obtenerImpuestoPorCategoria() {
    const categoria = categorias.find(c => c.value === this.categoria);
    if (categoria) {
      return categoria.impuesto;
    }   
    return 0;
    }

   
    obtenerCostoEnvioPorUnidad() {
        const peso = this.pesoVolumetrico;

        if (peso <= 10) {
            return 0;
        }
        if (peso <= 20) {
        return 3.5;
        }
        if (peso <= 40) {
        return 5;
        }
        if (peso <= 80) {
        return 6;
        }
        if (peso <= 100) {
        return 6.5;
        }
        if (peso <= 200) {
        return 8;
        }
        if (peso >= 200) {
        return 9;
        }
        return 0;
    }
    calcularCostoEnvio() {
        const costoEnvio = this.cantidad *this.obtenerCostoEnvioPorUnidad();
        const descuento = costoEnvio*this.obtenerDescuentoCliente();

        return costoEnvio - descuento;
    }
  validar(){
    let mensaje="";
    if (this.cantidad === undefined || this.cantidad === null || this.cantidad === "") {
        mensaje += "La cantidad es obligatoria. ";
    }
    if (this.precio === undefined || this.precio === null || this.precio === "") {
        mensaje += "El precio es obligatorio. ";
    }
    if(this.precio<0){
      mensaje+="El precio no puede ser negativo. ";
    }
    if(this.cantidad<0){
      mensaje+="La cantidad no puede ser negativa.";
    }
    if(this.pesoVolumetrico === undefined || this.pesoVolumetrico === null || this.pesoVolumetrico === "") {
        mensaje += "El peso volumétrico es obligatorio. ";
    }
    if(this.pesoVolumetrico<0){
      mensaje+="El peso volumétrico debe ser mayor o igual a 0. ";
    }
    return mensaje;
  }

  mostrarResultado(){
    let mensaje=this.validar();
    if(mensaje===""){
      return "El total es: " + this.calcularTotal();
    }
    else{
      return mensaje;
    }
  }
  obtenerSubtotal() {
    return this.cantidad * this.precio;
  }

  obtenerDescuento() {
    const subtotal = this.obtenerSubtotal();
    if (subtotal >= 30000) {
      return 0.15;
    }
    if (subtotal >= 10000) {
      return 0.10;
    }
    if (subtotal >= 7000) {
      return 0.07;
    }
    if (subtotal >= 3000) {
      return 0.05;
    }
    if (subtotal >= 1000) {
      return 0.03;
    }
    return 0;
  }
  obtenerDescuentoEnPesos() {
    const descuento = this.obtenerDescuento();
    return this.obtenerSubtotal() * (descuento || 0);
  }
  
  calcularTotal() {
    const subtotal = this.obtenerSubtotal();
    const descuentoGeneral = this.obtenerDescuentoEnPesos();
    const precioConDescuento = subtotal - descuentoGeneral;
    const descuentoCategoria =precioConDescuento * this.obtenerDescuentoPorCategoria();
    const precioConDescuentos =precioConDescuento - descuentoCategoria;
    const impuestoEstado =this.calcularImpuesto(precioConDescuentos);
    const impuestoCategoria =precioConDescuentos * this.obtenerImpuestoPorCategoria();
    const descuentoFijo = this.obtenerDescuentoFijo();
    const precioFinalProductos =
    precioConDescuentos - descuentoFijo;
    const costoEnvio =this.calcularCostoEnvio();
    return precioConDescuentos + impuestoEstado + impuestoCategoria+ costoEnvio-descuentoFijo;
}
    getImpuestoPorEstado(precio) {
    const estado = estados.find(
        e => e.value === this.estado
    );

    if (estado) {
        const porcentaje = estado.impuesto * 100;
        const impuesto = estado.impuesto * precio;

        return `Para ${this.estado}: ${porcentaje}% → +$${impuesto.toFixed(2)}`;
    }

    return "";
    }
   getDescuentoPorCliente(precio) {
    const cliente = tiposCliente.find(
        c => c.value === this.tipoCliente
    );

    if (cliente) {
        const porcentaje = cliente.descuento * 100;
        const descuento = cliente.descuento * precio;

        return `Para ${this.tipoCliente}: ${porcentaje}% → -$${descuento.toFixed(2)}`;
    }

    return "";
    }
    getDescuentoPorCategoria(precio) {
    const categoria = categorias.find(c => c.value === this.categoria);
    if (categoria) {
        const porcentaje = categoria.descuento * 100;
        const descuento = categoria.descuento * precio;
        return `Para ${this.categoria}: ${porcentaje}% → -$${descuento.toFixed(2)}`;
        }
    }
  getImpuesto() {
    const estado = estados.find(e => e.value === this.estado);
    if (estado) {
      return "Para " + this.estado + ": " + (estado.impuesto * 100) + "%";
    }
  }
  getImpuestoPorPeso(){
    
  }
  obtenerImpuesto() {
  const estado = estados.find(e => e.value === this.estado);

  if (estado) {
    return estado.impuesto;
  }

  return 0;
}

  calcularImpuesto() {
    const estado = estados.find(e => e.value === this.estado);
    if (estado) {
      return this.cantidad * this.precio * estado.impuesto;
    }
    return 0;
  }

}

export default Totalizador;