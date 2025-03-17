let amigos = [] //Se declara el array amigos para insertar los nombres de los participantes
let sorteoRealizado = 0
let primerLugar = ""
let segundoLugar = ""

function agregarAmigo() { //Función para agregar un amigo a la lista

  const inputAmigo = document.getElementById("amigo")
  const nombreAmigo = inputAmigo.value.trim()

  if (nombreAmigo === "") {    // Validamos que el campo no esté vacío
    alert("Por favor, inserte un nombre.")
    return
  }

  amigos.push(nombreAmigo)   // Añadimos el nombre al array de amigos y limpiamos el campo
  inputAmigo.value = ""

  actualizarListaAmigos() // Actualizamos la lista y enfocamos la entrada para no tener que usar el mouse
  inputAmigo.focus()
}

function eliminarAmigo(index) {  //Función para eliminar un amigo de la lista
  amigos.splice(index, 1)

  actualizarListaAmigos()
}

function actualizarListaAmigos() { //Actualiza la lista en el html
  const listaAmigos = document.getElementById("listaAmigos")

  listaAmigos.innerHTML = ""

  for (let i = 0; i < amigos.length; i++) {
    const itemLista = document.createElement("li") //Creamos el nuevo elemento de lista para c/u

    const contenedor = document.createElement("div") //Contenedor para nombre e icono
    contenedor.className = "name-item-container"

    const nombreSpan = document.createElement("span") //Agregamos el nombre
    nombreSpan.textContent = amigos[i]
    contenedor.appendChild(nombreSpan)

    const deleteButton = document.createElement("button") //Creamos el boton de eliminar
    deleteButton.className = "delete-button"
    deleteButton.setAttribute("aria-label", "Eliminar participante")

    const trashIcon = document.createElement("img") //Creamos la imagen del icono con su respectiva ruta
    trashIcon.src = "assets/trash.svg"
    trashIcon.alt = "Eliminar"

    deleteButton.appendChild(trashIcon) //Asociamos el boton con la imagen.
    deleteButton.addEventListener("click", () => { //Agregamos el evento de click en el boton
      eliminarAmigo(i)
    })

    contenedor.appendChild(deleteButton)
    itemLista.appendChild(contenedor)
    listaAmigos.appendChild(itemLista)
  }
}

function sortearAmigo() { //Función para sortear con random
    if (amigos.length < 5) {
      alert("Debe agregar al menos 5 participantes para realizar el sorteo.")
      return
    }
  
    const listaResultado = document.getElementById("resultado")  // Obtenemos la referencia a la lista de resultados
  
    
    if (sorteoRealizado >= 2) { // Verificamos si ya se han realizado los dos sorteos
      alert("Ya no hay premios para sortear. Por favor, reinicie el sorteo para comenzar de nuevo.")
      return
    }
      
    let indiceAleatorio
    let amigoSeleccionado
  
    do { // Aseguramos que no se repita el ganador del primer lugar
      indiceAleatorio = Math.floor(Math.random() * amigos.length)
      amigoSeleccionado = amigos[indiceAleatorio]
    } while (sorteoRealizado === 1 && amigoSeleccionado === primerLugar)
 
    sorteoRealizado++
      
    if (sorteoRealizado === 1) { // Guardamos el resultado según el lugar
      primerLugar = amigoSeleccionado
      listaResultado.innerHTML = `
        <li class="resultado-primer-lugar">¡${amigoSeleccionado} ha ganado el PRIMER LUGAR!</li>
      `
    } else {
      segundoLugar = amigoSeleccionado
      listaResultado.innerHTML = `
        <li class="resultado-primer-lugar">Primer lugar: ${primerLugar}</li>
        <li class="resultado-segundo-lugar">Segundo lugar: ${amigoSeleccionado}</li>
      `
    }
  }
  
  function reiniciarSorteo() { //Funcion para reiniciar el sorteo
    amigos = []
    sorteoRealizado = 0
    primerLugar = ""
    segundoLugar = "" 
    actualizarListaAmigos()
  
    const listaResultado = document.getElementById("resultado")
    listaResultado.innerHTML = ""  
    document.getElementById("amigo").focus()
  }
  
  document.getElementById("amigo").addEventListener("keypress", (event) => { //Evento para poder agregar amigos con el "Enter"
    if (event.key === "Enter") {
      agregarAmigo()
    }
  })
  
  