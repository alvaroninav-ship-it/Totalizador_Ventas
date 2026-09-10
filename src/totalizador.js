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


class Totalizador {
  constructor(cantidad, precio, estado, categoria) {
    this.cantidad = cantidad;
    this.precio = precio;
    this.estado = estado;
    this.categoria = categoria;
  }

  obtenerDescuentoPorCategoria() {
    const categoria = categorias.find(c => c.value === this.categoria);
    if (categoria) {
      return categoria.descuento;
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
  validar(){
    let mensaje="";
    if(this.precio<0){
      mensaje+="El precio no puede ser negativo. ";
    }
    if(this.cantidad<0){
      mensaje+="La cantidad no puede ser negativa.";
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
    return precioConDescuentos + impuestoEstado + impuestoCategoria;
}
  getImpuesto() {
    const estado = estados.find(e => e.value === this.estado);
    if (estado) {
      return "Para " + this.estado + ": " + (estado.impuesto * 100) + "%";
    }
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