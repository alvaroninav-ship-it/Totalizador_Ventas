class Totalizador {
  constructor(cantidad, precio) {
    this.cantidad = cantidad;
    this.precio = precio;
  }

  calcularTotal() {
    return this.cantidad * this.precio;
  }
}

export default Totalizador;