function MudarCor(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

// Botão de Download CV
document.querySelector('.download-cv').addEventListener('click', () => {
    window.open('caminho/para/seu-cv.pdf', '_blank');
});

// Botão de Contato
document.querySelector('.contato-btn').addEventListener('click', () => {
    window.location.href = '#contato'; // Rola até o footer
});