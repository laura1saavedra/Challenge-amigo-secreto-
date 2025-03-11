// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo(){
    const inputNombre = document.getElementById("amigo");
    const nombreAmigo = inputNombre.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombreAmigo);

    inputNombre.value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const elementoLista = document.getElementById("listaAmigos");
    elementoLista.innerHTML = ""; 

    amigos.forEach(amigo => {
        const agregaAmigoLista = document.createElement("li");
        agregaAmigoLista.textContent = amigo;
        elementoLista.appendChild(agregaAmigoLista);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega amigos a la lista antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoAmigo = document.getElementById("resultado");
    resultadoAmigo.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}


document.addEventListener('DOMContentLoaded' , () => {
    document.getElementById("button-add").addEventListener ("click", agregarAmigo);
    document.getElementById("button-draw").addEventListener("click", sortearAmigo);
})

