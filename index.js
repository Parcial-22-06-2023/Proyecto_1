function cargarInformacion() {
    var nombre = document.getElementById("nombre").value;
    var cedula = document.getElementById("cedula").value;
    var carrera = document.getElementById("carrera").value;
    
    document.getElementById("datosIngresados").innerHTML = "Nombre: " + nombre + "<br>Cédula: " + cedula + "<br>Carrera: " + carrera;
  }
  