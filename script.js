const music = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
const musicControl = document.getElementById('music-control');

function startApp() {
    const splash = document.getElementById('splash-screen');
    const mainCard = document.querySelector('.main-card');
    const buttons = document.querySelectorAll('.icons-grid a');

    // Tocar música com volume seguro
    if(music) {
        music.volume = 0.3;
        music.play().catch(e => console.log("Audio blocked"));
        musicControl.style.display = 'flex';
    }

    // Esconder Splash
    splash.style.opacity = '0';
    setTimeout(() => {
        splash.style.visibility = 'hidden';
        
        // Mostrar Card Principal
        mainCard.classList.add('card-appear');

        // Animação dos botões um a um
        buttons.forEach((btn, index) => {
            setTimeout(() => {
                btn.classList.add('show');
            }, 400 + (index * 120));
        });
    }, 800);
}

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.className = 'fas fa-volume-up';
    } else {
        music.pause();
        musicIcon.className = 'fas fa-volume-mute';
    }
}

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
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
}
