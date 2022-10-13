// preloader
const loader = document.getElementById("preloader")
window.addEventListener("load", function () {
    // loader.style.display = "none";
    loader.classList.add('visuallyhidden');
    loader.addEventListener('transitionend', function (e) {
        loader.classList.add('hidden');
        document.body.style.overflow = "unset";
    }, {
        capture: false,
        once: true,
        passive: false
    });
})

const clearbtn = document.getElementById('clear-checkbox');
const scorebtn = document.getElementById('score');
const popup = document.getElementById('popup');

const finalscore = document.getElementById('fscore');

window.localStorage.removeItem("fscore");

function uncheckAll() {
    document.querySelectorAll('input[type="checkbox"]')
    .forEach(el => el.checked = false);
    popup.innerHTML = ""
   
    score = 0
    scorebtn.disabled = false
}

let score=0
let inputs

function calculateScore() {
    inputs=document.querySelectorAll('input[type="checkbox"]')

    for (let input of inputs){
        if (input.checked) {
            score++
        }
    }

    // scorebtn.disabled = true
    popup.innerHTML = "Your score is " + score

    document.getElementsByClassName('show')[0].style.display = 'none';
    document.getElementsByClassName('show')[1].style.display = 'none';
    document.getElementsByClassName('show')[2].style.display = 'none';
    document.getElementsByClassName('show')[3].style.display = 'none';
    document.getElementsByClassName('show')[4].style.display = 'none';
    document.getElementsByClassName('show')[5].style.display = 'none';

    scroll(0,0)
}

clearbtn.addEventListener('click', uncheckAll)
scorebtn.addEventListener('click', calculateScore)

// ways to add 2 function to same click call
// element.addEventListener('click',() => {    
//      calculateScore();
//      displayscore();    
// });


// scrolling effect
// ScrollReveal().reveal('.scroll',{ delay: 500 });
