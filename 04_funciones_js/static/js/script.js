function listaAsistencia() {
    let asistencia = [];
    const nombresAlumnos = document.getElementById("input1").value;
    const container = document.getElementById('resultadoContainer1');
    const resultado = document.getElementById('result1')
    asistencia.push(resultado)
    console.log(asistencia)
    container.classList.remove('d-none');

}