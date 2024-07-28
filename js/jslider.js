/*Autor: Angel Escamilla*/
/*Cargador de eventos al iniciar la página*/
window.addEventListener('load', iniciar, false);

/*Contador inicializado en cero*/
var contador = 0;

function iniciar() {
    setInterval(cambiarImg, 5000);
}

var obj = document.getElementById('slider');
var slides = obj.getElementsByClassName('slide');

function cambiarManual(sentido) {
    slides[contador].style.opacity = 0;

    if (sentido == "DER") {
        if (contador < slides.length - 1) {
            contador++;
        } else {
            contador = 0;
        }
    } else if (sentido == "IZQ") {
        if (contador != 0) {
            contador--;
        } else {
            contador = slides.length - 1;
        }
    }

    slides[contador].style.opacity = 1;
}

function cambiarImg() {
    slides[contador].style.opacity = 0;

    if (contador < slides.length - 1) {
        contador++;
    } else {
        contador = 0;
    }

    slides[contador].style.opacity = 1;
}
