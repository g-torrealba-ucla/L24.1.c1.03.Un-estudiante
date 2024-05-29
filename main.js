import Estudiante from "./Estudiante.js";
import IEstudiante from "./IEstudiante.js";

const iEst = new IEstudiante();
const c = iEst.leerCedula();
const n1 = iEst.leerNota1();
const n2 = iEst.leerNota2();
const n3 = iEst.leerNota3();

const est = new Estudiante(c, n1, n2, n3);

let salida = document.getElementById("salida");

salida.innerHTML = iEst.reporteEstudiante(est);
