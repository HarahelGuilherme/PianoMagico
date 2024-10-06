// Função para tocar uma nota
function tocarNota(nota) {
    const audio = document.getElementById(nota);
    const tecla = document.querySelector(`[data-note="${nota}"]`);
    
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        tecla.classList.add('ativa'); // Adiciona efeito visual
        setTimeout(() => tecla.classList.remove('ativa'), 200); // Remove o efeito visual
    }
}

// Função para mapear o teclado do computador
document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const tecla = document.querySelector(`.tecla[data-key="${key}"]`);
    
    if (tecla) {
        const nota = tecla.getAttribute('data-note');
        tocarNota(nota);
    }
});
