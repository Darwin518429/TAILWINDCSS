let nombreInput = document.getElementById("nombre");  //selecionamos elos elementos 
let comentInput = document.getElementById("comentario");
let boton = document.getElementById("botton");
let areaComentarios = document.getElementById("comentariosSection");

function enviarComentario() {
if (nombreInput.value === "" || comentInput.value === "") {
    return;
}

    const nombre = nombreInput.value;
    const comentario = comentInput.value;

    // Crear comentario
    const nuevoComentario = document.createElement("p");
    nuevoComentario.textContent = `${nombre}:  
    ${comentario}`;

    // comentarios
    areaComentarios.appendChild(nuevoComentario);

    // Limpiar 

    nombreInput.value = "";
    comentInput.value = "";
}


    boton.addEventListener("click", enviarComentario);
   