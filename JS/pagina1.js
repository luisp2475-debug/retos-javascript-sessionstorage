

function guardar() {
    const nombre = document.getElementById("nombre").value;
    sessionStorage.setItem("nombre", nombre);
    window.location.href = "pagina2.html";
}


document.getElementById("btn-guardar").addEventListener("click", guardar);



function validarYGuardar(evento) {

    const nombre = document.getElementById("nombre").value;
    const ciudad = document.getElementById("ciudad").value;
    const mensaje = document.getElementById("mensaje-error");

    if (nombre.trim() === "") {

        evento.stopImmediatePropagation();

        mensaje.textContent = "Por favor escriba su nombre";

    } else {

        sessionStorage.setItem("ciudad", ciudad);

        mensaje.textContent = "";

    }
}


document.getElementById("btn-guardar").addEventListener("click", validarYGuardar, true);


