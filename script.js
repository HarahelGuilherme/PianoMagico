function tocarNota(nota) {
    const audio = document.getElementById(nota);
    if (audio) {
        audio.currentTime = 0; // Reinicia o áudio
        audio.play(); // Toca o áudio
    }
}
