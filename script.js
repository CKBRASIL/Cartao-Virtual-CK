// Seleção de elementos para a música
const music = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
const musicControl = document.getElementById('music-control');

/**
 * Função disparada ao clicar no Splash Screen
 * Isso inicia a música e revela o cartão
 */
function startApp() {
    const splash = document.getElementById('splash-screen');
    const mainCard = document.querySelector('.main-card');
    const buttons = document.querySelectorAll('.icons-grid a');

    // 1. Inicia a música (O navegador permite agora pois houve um clique)
    if (music) {
        music.volume = 0.4; // Volume em 40% para não assustar
        music.play().catch(err => console.log("Erro ao tocar música:", err));
        musicControl.style.display = 'flex'; // Mostra o botão de mute
    }

    // 2. Inicia o desvanecimento do Splash Screen
    splash.style.opacity = '0';

    setTimeout(() => {
        splash.style.visibility = 'hidden';
        
        // 3. Revela a placa principal
        mainCard.classList.add('card-appear');

        // 4. Animação em cascata dos botões
        buttons.forEach((btn, index) => {
            setTimeout(() => {
                btn.classList.add('show');
            }, 300 + (index * 100));
        });
    }, 800);
}

/**
 * Função para Alternar o som (Mute/Unmute)
 */
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.className = 'fas fa-volume-up';
    } else {
        music.pause();
        musicIcon.className = 'fas fa-volume-mute';
    }
}

/**
 * Função para Gerar e Baixar o Contato (VCard)
 */
function downloadVCard() {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Danielle Cordeiro | CK Brasil
ORG:CK Brasil
TEL;TYPE=CELL,VOICE:+5511954627266
EMAIL:danielle.cordeiro@ckbrasil.com.br
URL:https://ckbrasil.com.br
ADR:;;Rua Portela de Góis, 225;São Paulo;SP;04829-070;Brazil
END:VCARD`;

    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Danielle-CK-Brasil.vcf';
    link.click();
    
    // Limpeza de memória
    window.URL.revokeObjectURL(url);
}

// Registro automático do Service Worker para o PWA (Opcional se já estiver no HTML)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').catch(err => console.log(err));
    });
}
