class Noticia{

    constructor(titulo, descripcion, imagen, autor, lugar, fecha)
    {
        this.titulo = titulo
        this.descripcion = descripcion
        this.imagen = imagen
        this.autor = autor
        this.lugar = lugar
        this.fecha = fecha
    }

    getHTML = () => {
        let cadena = `
        <div class="noticia oculto">
            <img src="${this.imagen}">
            <h3>${this.titulo}</h3>
            ${this.descripcion}<br>
            <span class="autor">${this.autor}</span><br>
            <span class="lugar">${this.lugar}</span><br>
            <span class="fecha">${this.fecha}</span><br>
        </div>`
        return cadena
    }
}
