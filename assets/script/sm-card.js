let sCards = document.querySelectorAll('.servicos-card');

for (let i = 0; i < sCards.length; i++) {
    const sCard = sCards[i];
    let saibaMais = sCard.querySelector('.sm-div');
    sCard.addEventListener('mouseover', () => {
        saibaMais.classList.add('sm-div-show')
    })
    sCard.addEventListener('mouseout', () => {
        saibaMais.classList.remove('sm-div-show')
    })
}

