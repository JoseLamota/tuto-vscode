export class VistaCine {
    mostrarResultados(cine) {
      let resultado = `
        <h2>RESULTADOS DEL CINE</h2>
        <p>Dinero inicial en caja: $${cine.dineroInicial}</p>
        <ul>
      `;
  
      for (const familia of cine.familias) {
        resultado += `<li>Familia ${familia.nombre}: $${familia.calcularPrecio()}</li>`;
      }
  
      resultado += `
        </ul>
        <p>Familia que pagó más: ${cine.obtenerFamiliaQueMasPago().nombre}</p>
        <p>Promedio pagado los días lunes: $${cine.calcularPromedioLunes().toFixed(2)}</p>
        <p>Total de dinero al final de la jornada: $${cine.calcularTotalFinal().toFixed(2)}</p>
      `;
  
      return resultado;
    }
  }