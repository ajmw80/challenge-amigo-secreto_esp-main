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


    function sortearAmigo() {
      const resultado = document.getElementById("resultado");

      // 1. Validar que haya amigos disponibles
      if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear.");
        return;
      }

      // 2. Generar un índice aleatorio
      const indiceAleatorio = Math.floor(Math.random() * amigos.length);

      // 3. Obtener el nombre sorteado
      const amigoSorteado = amigos[indiceAleatorio];

      // 4. Mostrar el resultado
      resultado.innerHTML = "🎉 El amigo sorteado es: <b>" + amigoSorteado + "</b>";
    
    }