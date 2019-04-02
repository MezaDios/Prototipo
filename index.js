$(window).scroll(function() {
    $('.oculto').each(function(){
    let imagePos = $(this).offset().top;

    let topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 500) {
            $(this).addClass("fadeIn");
        }
    })
})