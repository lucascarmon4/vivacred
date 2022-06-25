let links = document.querySelectorAll('.sm-link');

let square1 = document.querySelector('.square1');
let square2 = document.querySelector('.square2');
let square3 = document.querySelector('.square3');
let square4 = document.querySelector('.square4');
let square5 = document.querySelector('.square5');
let square6 = document.querySelector('.square6');
let divSquares = document.querySelector('.div-squares');

for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', (event) => {
        let clicked = event.target;
        divSquares.classList.remove('hidden');


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


        divSquares.addEventListener('click', () => { 
            
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
            divSquares.classList.add('hidden');
        })


    })
}



// //
