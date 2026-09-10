const estados=[{value: "UT", impuesto: 0.0665},{value: "NV", impuesto: 0.08},{value: "TX", impuesto: 0.0625},{value: "AL", impuesto: 0.04}, {value: "CA", impuesto: 0.0825}]
class Totalizador {
  constructor(cantidad, precio, estado) {
    this.cantidad = cantidad;
    this.precio = precio;
    this.estado = estado;
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
  }
  obtenerDescuentoEnPesos() {
    const descuento = this.obtenerDescuento();
    return this.obtenerSubtotal() * (descuento || 0);
  }
  
  calcularTotal() {
    return this.cantidad * this.precio + this.calcularImpuesto() - this.obtenerDescuentoEnPesos();
  }
  getImpuesto() {
    const estado = estados.find(e => e.value === this.estado);
    if (estado) {
      return "Para " + this.estado + ": " + (estado.impuesto * 100) + "%";
    }
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