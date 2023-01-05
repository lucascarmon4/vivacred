let sCards = document.querySelectorAll('.servicos-card');
//SHOW SAIBA MAIS
for (let i = 0; i < sCards.length; i++) {
    const sCard = sCards[i];
    let saibaMais = sCard.querySelector('.sm-div-link');
    sCard.addEventListener('mouseover', (e) => {
        saibaMais.classList.add('sm-link-show')
        calculaTranslate(saibaMais);
    })
    sCard.addEventListener('mouseout', () => {
        saibaMais.classList.remove('sm-link-show');
        saibaMais.style.transform = `translateX(50px) scale(0.5)`
    })
}

// CALCULA TRANSLATE
function calculaTranslate(element){
        const cardWidth = element.parentNode.parentNode.clientWidth;
        const calculo = (cardWidth / 2) + 10;
        element.style.transform = `translateX(${calculo}px) scale(1)`;
}