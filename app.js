//Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // Corregido: usar "value" en lugar de "ariaValueMax"

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución de la función
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya está en la lista.`);
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);
    
    //Limpiar el campo de entrada
    inputAmigo.value = "";
    //Actualizar la lista en el HTML
    actualizarLista();
}
//Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    //limpiar el contenido actual de la lista
    listaAmigos.innerHTML = "";
    for(let i=0;i<amigos.length;i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
//Funcion para seleccionar un amigo aleatorio
function sortearAmigo(){
    //Validar que haya amigos disponibles
    if(amigos.length === 0){
        alert("No hay amigos disponibles para dsotrear. Agregar almenos uno.");
        return;
    }
    //Genera un indice aleatorio
    const indicaAleatorio = Math.floor(Math.random()*amigos.length);

    const amigoSorteado = amigos[indicaAleatorio]

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado : <strong>${amigoSorteado}</strong>`;
}