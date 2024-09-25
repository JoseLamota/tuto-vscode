import { Familia } from './Familia.js';

export class Cine {
  constructor(dineroInicial) {
    this.dineroInicial = dineroInicial;
    this.familias = [];
  }

  agregarFamilia(familia) {
    this.familias.push(familia);
  }

  obtenerFamiliaQueMasPago() {
    let familiaMasPago = null;
    let montoMaximo = 0;

    for (const familia of this.familias) {
      const monto = familia.calcularPrecio();
      if (monto > montoMaximo) {
        montoMaximo = monto;
        familiaMasPago = familia;
      }
    }

    return familiaMasPago;
  }

  calcularPromedioLunes() {
    let totalLunes = 0;
    let cantidadLunes = 0;

    for (const familia of this.familias) {
      if (familia.dia === 1) {
        totalLunes += familia.calcularPrecio();
        cantidadLunes++;
      }
    }

    return cantidadLunes > 0 ? totalLunes / cantidadLunes : 0; 
  }

  calcularTotalFinal() {
    let totalRecaudado = 0;

    for (const familia of this.familias) {
      totalRecaudado += familia.calcularPrecio();
    }

    return this.dineroInicial + totalRecaudado; 
  }
}