function tocarNota(nota) {
    const audio = document.getElementById(nota);
    if (audio) {
        audio.currentTime = 0; // Reinicia o som para tocar do início
        audio.play(); // Reproduz a nota
    }
}
