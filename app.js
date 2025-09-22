let amigos = [];

function agregarAmigo(){
    
      // 1. Capturar el valor del campo de entrada
      const input = document.getElementById("amigo");
      const nombre = input.value.trim();

      // 2. Validar la entrada
      if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
      }
      console.log(amigos);
      // 3. Actualizar el array de amigos
      amigos.push(nombre);

      // 4. Limpiar el campo de entrada
      input.value = "";
      
    mostrarLista();
    }

    function mostrarLista() {
      // Obtener el elemento UL
      const lista = document.getElementById("listaAmigos");

      // Limpiar la lista existente
      lista.innerHTML = "";

      // Recorrer el arreglo e ir agregando <li> por cada amigo
      for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
      }

}

/*

function sortearAmigo(){
    const random = Math.floor(Math.random()* listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    listaAmigoUl.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
*/

