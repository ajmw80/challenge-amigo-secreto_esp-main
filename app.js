let listaAmigos = [];

const inputAmigo = document.getElementById("amigo");
const listaAmigoUl = document.getElementById("listaAmigos");

function agregarAmigo(){
    listaAmigos.push(inputAmigo.value);
    listaAmigoUl.innerHTML += `<li>${inputAmigo.value}</li>`;
}


function sortearAmigo(){
    const random = Math.floor(Math.random()* listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    listaAmigoUl.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}


