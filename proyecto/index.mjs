// Clase abstracta Figura con los métodos a sobreescribir
class Figura {
    constructor(coordX, coordY) {
      this.coordX = coordX;
      this.coordY = coordY;
    }
  
    calcularArea() {
      throw new Error("Debes sobreescribir calcularArea en la subclase");
    }
  
    calcularPerimetro() {
      throw new Error("Debes sobreescribir calcularPerimetro en la subclase");
    }
  
    get coordenadas() {
      return { x: this.coordX, y: this.coordY };
    }
  }
  
  // Subclase Cuadrado
  class Cuadrado extends Figura {
    constructor(coordX, coordY, lado) {
      super(coordX, coordY);
      this.lado = lado;
    }
  
    calcularArea() {
      return this.lado ** 2;
    }
  
    calcularPerimetro() {
      return 4 * this.lado;
    }
  }
  
  // Subclase Círculo
  class Circulo extends Figura {
    constructor(coordX, coordY, radio) {
      super(coordX, coordY);
      this.radio = radio;
    }
  
    calcularArea() {
      return Math.PI * this.radio ** 2;
    }
  
    calcularPerimetro() {
      return 2 * Math.PI * this.radio;
    }
  }
  
  // Arreglo con las figuras (cuadrados y círculos)
  const figuras = [
    new Cuadrado(2, 4, 3),
    new Cuadrado(1, 2, 5),
    new Cuadrado(-1, -2, 4),
    new Cuadrado(0, 0, 8),
    new Circulo(3, 0, 4),
    new Circulo(1, -3, 2),
    new Circulo(0, 0, 3),
    new Circulo(-2, -4, 5),
  ];
  
  
  // Funciones para calcular el área total y el perímetro total
  function calcularAreasTotales(figuras) {
    return figuras.reduce(
      (totalArea, figure) => totalArea + figure.calcularArea(),
      0
    );
  }
  
  function calcularPerimetrosTotales(figuras) {
    return figuras.reduce(
      (totalPerimetro, figure) => totalPerimetro + figure.calcularPerimetro(),
      0
    );
  }
  
  // Función para determinar cuál tipo de figura tiene el área mayor
  function determinarAreaMayor(figuras) {
    const areasCuadrados = figuras
      .filter((figure) => figure instanceof Cuadrado)
      .map((figure) => figure.calcularArea());
  
    const areasCirculos = figuras
      .filter((figure) => figure instanceof Circulo)
      .map((figure) => figure.calcularArea());
  
    return Math.max(Math.max(...areasCuadrados), Math.max(...areasCirculos));
  }
  
  // Calculamos el área total, el perímetro total y el área mayor
  const totalArea = calcularAreasTotales(figuras);
  const totalPerimetro = calcularPerimetrosTotales(figuras);
  const areaMayor = determinarAreaMayor(figuras);
  
  // Mostramos los resultados
  console.log(`Área total: ${totalArea}`);
  console.log(`Perímetro total: ${totalPerimetro}`);
  console.log(`Área mayor: ${areaMayor}`);