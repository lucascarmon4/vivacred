
const cards = document.querySelectorAll(".duvidas-card_top");


for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('click', () => {
        let resposta = card.nextElementSibling;
        let img = card.lastElementChild;
        img.classList.toggle('active');
        resposta.classList.toggle('active');
        resposta.classList.toggle('hidden');
    })

}