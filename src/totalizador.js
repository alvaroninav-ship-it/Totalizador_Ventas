class Totalizador {
  constructor(cantidad, precio) {
    this.cantidad = cantidad;
    this.precio = precio;
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
  
  calcularTotal() {
    return this.cantidad * this.precio;
  }


}

export default Totalizador;