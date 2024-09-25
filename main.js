import { Familia } from './Familia.js';
import { Cine } from './Cine.js';
import { VistaCine } from './VistaCine.js';

const cine = new Cine(100);
const vista = new VistaCine();

cine.agregarFamilia(new Familia("López", 4, 2));
cine.agregarFamilia(new Familia("Gil", 3, 1));
cine.agregarFamilia(new Familia("Gómez", 5, 5));
cine.agregarFamilia(new Familia("Mata", 2, 1));

const resultado = vista.mostrarResultados(cine);
document.getElementById('salida').innerHTML = resultado;