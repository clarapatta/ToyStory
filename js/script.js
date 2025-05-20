document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loveModal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const namiCat = document.getElementById('namiCat');
    const lunaCat = document.getElementById('lunaCat');
    const namiAudio = document.getElementById('namiAudio');
    const lunaAudio = document.getElementById('lunaAudio');
    const modalAudio = document.getElementById('modalAudio');

    const showMessageBtn = document.getElementById('showMessageBtn');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const messageAudio = document.getElementById('messageAudio');

    const showVideoBtn = document.getElementById('showVideoBtn');
    const videoContainer = document.getElementById('videoContainer');
    const loveVideo = document.getElementById('loveVideo');

    // Abrir modal
    openBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        modalAudio.currentTime = 0;
        modalAudio.play();
    });

    // Fechar modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Sons das gatinhas
    namiCat.addEventListener('click', () => {
        namiAudio.currentTime = 0;
        namiAudio.play();
    });

    lunaCat.addEventListener('click', () => {
        lunaAudio.currentTime = 0;
        lunaAudio.play();
    });

    // Mostrar mensagem
    showMessageBtn.addEventListener('click', () => {
        surpriseMessage.style.display = 'block';
        messageAudio.currentTime = 0;
        messageAudio.play();
    });

    // Mostrar vídeo
    showVideoBtn.addEventListener('click', () => {
        videoContainer.style.display = 'block';
        loveVideo.currentTime = 0;
        loveVideo.play();
    });
})