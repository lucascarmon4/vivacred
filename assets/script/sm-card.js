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


function calculaTranslate(saibaMais){
        const cardWidth = saibaMais.parentNode.parentNode.clientWidth;
        const calculo = (cardWidth / 2) + 20;
        saibaMais.style.transform = `translateX(${calculo}px) scale(1)`
    ;
}

// function checkCardDivShow(saibaMais) {
//     if (target.id == 'link1' || target.parentNode.id == 'link1' || target.parentNode.parentNode.id == 'link1'){
//         saibaMais.classList.add('sm-link-show');
//     }
//     if (target.id == 'link2' || target.parentNode.id == 'link2' || target.parentNode.parentNode.id == 'link2'){
//         saibaMais.classList.add('sm-link-show');
//     }
//     if (target.id == 'link3' || target.parentNode.id == 'link3' || target.parentNode.parentNode.id == 'link3'){
//         saibaMais.classList.add('sm-link-show');
//     }
//     if (target.id == 'link4' || target.parentNode.id == 'link4' || target.parentNode.parentNode.id == 'link4'){
//         saibaMais.classList.add('sm-link-show');
//     }
//     if (target.id == 'link5' || target.parentNode.id == 'link5' || target.parentNode.parentNode.id == 'link5'){
//         saibaMais.classList.add('sm-link-show');
//     }
//     if (target.id == 'link6' || target.parentNode.id == 'link6' || target.parentNode.parentNode.id == 'link6'){
//         saibaMais.classList.add('sm-link-show');
//     }
// }
