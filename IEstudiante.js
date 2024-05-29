export default class IEstudiante {
  leerCedula() {
    return prompt("Ingrese la cédula: ");
  }
  leerNota1() {
    return prompt("Ingrese la primera nota: ");
  }
  leerNota2() {
    return prompt("Ingrese la segunda nota: ");
  }
  leerNota3() {
    return prompt("Ingrese la tercera nota: ");
  }
  reporteEstudiante(est) {
    return `
    <br>Cédula: ${est.cedula}
    <br>Nota 1: ${est.nota1}
    <br>Nota 2: ${est.nota2}
    <br>Nota 3: ${est.nota3}
    <br>Nota final: ${est.notaFinal()}`;
  }
}
