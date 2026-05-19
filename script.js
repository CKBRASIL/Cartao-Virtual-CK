window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    const mainCard = document.querySelector('.main-card');
    const buttons = document.querySelectorAll('.icons-grid a');

    setTimeout(() => {
        splash.style.opacity = '0';
        splash.style.visibility = 'hidden';
        mainCard.classList.add('card-appear');

        buttons.forEach((btn, index) => {
            setTimeout(() => {
                btn.classList.add('show');
            }, 300 + (index * 100));
        });
    }, 1800);
});

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
}