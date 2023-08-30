const cargarSonido = function (fuente){
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};
const $botonReproducir = document.querySelector("#btnReproducir"), 
$botonPausar = document.querySelector("#btnPausar"), 
$botonReiniciar = document.querySelector("#btnReiniciar");

const sonido = cargarSonido("");
$botonReproducir.onclick = () => {
    sonido.play();
}
$botonPausar.onclick = () => {
    sonido.pause();
}
$botonReiniciar.onclick = () => {
    sonido.currentTime();
}
