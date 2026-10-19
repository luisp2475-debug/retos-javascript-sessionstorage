

function mostrarNombre() {
    const nombre = sessionStorage.getItem("nombre");

    if (nombre === null) {
        document.getElementById("saludo").textContent = "No hay ningún nombre guardado.";
    } else {
        document.getElementById("saludo").textContent = "Hola, " + nombre;
    }
}


function borrar() {
    sessionStorage.removeItem("nombre");
    mostrarNombre();
}


document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar);



function mostrarCiudad() {

    const ciudad = sessionStorage.getItem("ciudad");

    if (ciudad === null) {
        document.getElementById("mostrar-ciudad").textContent = "No hay ciudad guardada.";
    } else {
        document.getElementById("mostrar-ciudad").textContent = "Ciudad: " + ciudad;
    }
}

document.addEventListener("DOMContentLoaded", mostrarCiudad);



function borrarTodo() {

    sessionStorage.clear();

    mostrarNombre();
    mostrarCiudad();
}

document.getElementById("btn-borrar-todo").addEventListener("click", borrarTodo);


