// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

console.log(amigos);

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (!amigo) {
        alert("Por favor, inserte un nombre");
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    console.log(amigos);

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById('resultado').innerHTML = "No hay amigos disponibles para el sorteo.";
        return;
    }
    let amigoSecreto = Math.floor(Math.random() * amigos.length);
    amigoSecreto = amigos[amigoSecreto];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo secreto sorteado es: " + amigoSecreto;
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}   