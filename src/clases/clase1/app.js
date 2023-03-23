const app = () => {

    const titulo = document.createElement("h1")
    titulo.id = "titulo-componente"

    const descripcion = document.createElement("p")
    descripcion.id = "descripcion-componente"

    // Agregar contenido al componente
    titulo.textContent = "Título del componente"
    descripcion.textContent = "Descripción del componente"

    // Agregar elementos al árbol de nodos de la página
    componente.appendChild(titulo)
    componente.appendChild(descripcion)           
}
