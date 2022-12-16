let links = document.querySelectorAll('.selectLink');




let square1 = document.querySelector('.square1');
let square2 = document.querySelector('.square2');
let square3 = document.querySelector('.square3');
let square4 = document.querySelector('.square4');
let square5 = document.querySelector('.square5');
let square6 = document.querySelector('.square6');
let sectionSquare = document.querySelector('.hide-services');
let divSquares = document.querySelector('.div-squares');

let squaresX = document.querySelectorAll('.square-x');

for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', (event) => {
        let clicked = event.target;


        if (clicked.id == 'link1') {
            openSquare(square1);
        }
        if (clicked.id == 'link2') {
            openSquare(square2);
        }
        if (clicked.id == 'link3') {
            openSquare(square3);
        }
        if (clicked.id == 'link4') {
            openSquare(square4);
        }
        if (clicked.id == 'link5') {
            openSquare(square5);
        }
        if (clicked.id == 'link6') {
            openSquare(square6);
        }
        ///FECHAR MODAL

        divSquares.addEventListener('click', (event) => {
            const clicked = event.target;
            if (clicked.className == 'div-squares' || clicked.className == 'square-x' || clicked.id == 'close1' || clicked.id == 'close2') {
                closeSquare(square1);   
                closeSquare(square2);   
                closeSquare(square3);   
                closeSquare(square4);   
                closeSquare(square5);   
                closeSquare(square6);   
            }
        })
    })
}



window.addEventListener('load', () => {
    let tela = window.innerWidth;
        sCards.forEach((sCard) => {
            sCard.style.cursor = 'pointer';
            if(tela <= 900) {
                sCard.addEventListener('click', (e) => {
                   checkCard(e.target);
                });
            }
            else {
                sCard.style.cursor = 'default';

            }
        }) 
})


function openSquare(square) {
    divSquares.classList.remove('hidden');
    sectionSquare.classList.remove('hidden');
    square.classList.remove('hidden');
    square.classList.add('show-service');
}

function closeSquare(square) {
    divSquares.classList.add('div-squares-close');
    square.classList.add('squares-close');
    setTimeout(() => {
        square.classList.add('hidden');
        square.classList.remove('show-service');
        square.classList.remove('show-service');
        square.classList.remove('squares-close');
        divSquares.classList.add('hidden');
        divSquares.classList.remove('div-squares-close');
        sectionSquare.classList.add('hidden');
    }, 500)
}

function checkCard(target) {
    if (target.id == 'link1' || target.parentNode.id == 'link1' || target.parentNode.parentNode.id == 'link1'){
        openSquare(square1);
    }
    if (target.id == 'link2' || target.parentNode.id == 'link2' || target.parentNode.parentNode.id == 'link2'){
        openSquare(square2);
    }
    if (target.id == 'link3' || target.parentNode.id == 'link3' || target.parentNode.parentNode.id == 'link3'){
        openSquare(square3);
    }
    if (target.id == 'link4' || target.parentNode.id == 'link4' || target.parentNode.parentNode.id == 'link4'){
        openSquare(square4);
    }
    if (target.id == 'link5' || target.parentNode.id == 'link5' || target.parentNode.parentNode.id == 'link5'){
        openSquare(square5);
    }
    if (target.id == 'link6' || target.parentNode.id == 'link6' || target.parentNode.parentNode.id == 'link6'){
        openSquare(square6);
    }

    
    divSquares.addEventListener('click', (event) => {
        const clicked = event.target;
        if (clicked.className == 'div-squares' || clicked.className == 'square-x' || clicked.id == 'close1' || clicked.id == 'close2') {
            closeSquare(square1);   
            closeSquare(square2);   
            closeSquare(square3);   
            closeSquare(square4);   
            closeSquare(square5);   
            closeSquare(square6);   
        }
    })
}



