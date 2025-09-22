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
      console.log(nombre);
      // 3. Actualizar el array de amigos
      amigos.push(nombre);

      // Mostrar en la lista visual
      const lista = document.getElementById("listaAmigos");
      const li = document.createElement("li");
      li.textContent = nombre;
      lista.appendChild(li);

      // 4. Limpiar el campo de entrada
      input.value = "";
}

/*

function sortearAmigo(){
    const random = Math.floor(Math.random()* listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    listaAmigoUl.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
*/

