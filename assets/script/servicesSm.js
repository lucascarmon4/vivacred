let links = document.querySelectorAll('.sm-link');

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
        divSquares.classList.remove('hidden');
        sectionSquare.classList.remove('hidden');

        if (clicked.id == 'link1') {
            square1.classList.remove('hidden');
            square1.classList.add('show-service');
        }
        if (clicked.id == 'link2') {
            square2.classList.remove('hidden');
            square2.classList.add('show-service');
        }
        if (clicked.id == 'link3') {
            square3.classList.remove('hidden');
            square3.classList.add('show-service');
        }
        if (clicked.id == 'link4') {
            square4.classList.remove('hidden');
            square4.classList.add('show-service');
        }
        if (clicked.id == 'link5') {
            square5.classList.remove('hidden');
            square5.classList.add('show-service');
        }
        if (clicked.id == 'link6') {
            square6.classList.remove('hidden');
            square6.classList.add('show-service');
        }


        ///FECHAR MODAL
        divSquares.addEventListener('click', (event) => {
            const clicked = event.target;
            if (clicked.className == 'div-squares' || clicked.className == 'square-x' || clicked.id == 'close1' || clicked.id == 'close2') {
                divSquares.classList.add('div-squares-close');
                square1.classList.add('squares-close');
                square2.classList.add('squares-close');
                square3.classList.add('squares-close');
                square4.classList.add('squares-close');
                square5.classList.add('squares-close');
                square6.classList.add('squares-close');
                setTimeout(() => {
                    square1.classList.add('hidden');
                    square2.classList.add('hidden');
                    square3.classList.add('hidden');
                    square4.classList.add('hidden');
                    square5.classList.add('hidden');
                    square6.classList.add('hidden'); 

                    square1.classList.remove('show-service');
                    square2.classList.remove('show-service');
                    square3.classList.remove('show-service');
                    square4.classList.remove('show-service');
                    square5.classList.remove('show-service');
                    square6.classList.remove('show-service');

                    square1.classList.remove('squares-close'); //animation
                    square2.classList.remove('squares-close'); //animation
                    square3.classList.remove('squares-close'); //animation
                    square4.classList.remove('squares-close'); //animation
                    square5.classList.remove('squares-close'); //animation
                    square6.classList.remove('squares-close'); //animation

                    divSquares.classList.add('hidden');
                    divSquares.classList.remove('div-squares-close');
                    
                    sectionSquare.classList.add('hidden');
                }, 500);
            }
        })
    })
}