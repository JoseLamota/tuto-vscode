export class Familia {
    constructor(nombre, personas, dia) {
      this.nombre = nombre;
      this.personas = personas;
      this.dia = dia;
      this.precioEntrada = 3;
    }
  
    calcularPrecio() {
      let precioTotal = this.personas * this.precioEntrada;
      if (this.dia === 1) { // Lunes
        precioTotal /= 2; 
      }
      return precioTotal;
    }
  }