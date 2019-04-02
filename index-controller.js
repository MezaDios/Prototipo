let json = $.getJSON("./noticias.json", () => {
    console.log("success");
})
    .done(() => {
        console.log("second success");
    })

    .fail(() => {
        console.log("error");
    })

    .always(() => {
        console.log("complete");
    })
json.complete(() => {
    console.log("second complete");

    let noticias = []

    let noticiasJSON = json.responseJSON["noticias"]
    
    noticiasJSON.forEach(e => { 
        let noticia = new Noticia(e["titulo"], e["descripcion"], e["imagen"], e["autor"], e["lugar"], e["fecha"])
        noticias.push(noticia)
    });

    let cadena = "<h3 id='titulo'>Noticias</h3>"
    noticias.forEach(element => {
        cadena += element.getHTML()
        
    console.log(cadena);
    });

    $("#noticias")[0].innerHTML = cadena
});