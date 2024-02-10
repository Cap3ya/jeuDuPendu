import dom from './dom.js';
import pendu from './pendu.js';
import dictionary from './dictionary.js';

dom.buttons.addEventListener("click", (e) => {
    if (e.target.id === "btnStart")
        start();

    else if (e.target.classList.contains('btnsLetter'))
        guess(e.target);
})

// FUNCTIONS 

function start() {

    // Create btnsLetter if not yet defined
    if (dom.btnsLetter.length === 0)
        dom.setBtnsLetter()
    // Else display and enable them
    else
        dom.btnsLetter.forEach(btn => {
            btn.hidden = false;
            btn.disabled = false;
        })
    // Hide start button
    dom.btnStart.hidden = true;
    // Show initial 9pts image 
    dom.image.src = '../images/9.png'
    // Indique le nbr de tentatives restantes
    dom.info.textContent = 'Il te reste 9 tentatives'

    // Set word to be guessed from the dictionary 
    pendu.setWord(dictionary.getWord());
    dom.secret.textContent = pendu.getSecret();
    // Reset number of errors
    pendu.errors = 0;

    console.log(pendu.word)
}

function guess(target) {

    // Update secret or inc errors
    pendu.handleGuess(target.textContent)

    // DOM
    target.disabled = true;
    dom.secret.textContent = pendu.getSecret();
    dom.info.textContent = "Il te reste " + pendu.getRemainingErrors() + " " + (pendu.getRemainingErrors() > 1 ? "tentatives" : "tentative");
    dom.image.src = `../images/${pendu.getRemainingErrors()}.png`

    if (pendu.word === pendu.getSecret()) {
        dom.image.src = "../images/10.png";
        dom.info.textContent = "Tu as Gagné!"
        outcome();
    }
    else if (pendu.getRemainingErrors() == 0) {
        dom.info.textContent = "Tu as Perdu!";
        dom.secret.textContent = pendu.word;
        outcome();
    }
}

function outcome() {
    dom.btnStart.hidden = false;
    dom.btnStart.textContent = "Restart";
    dom.btnsLetter.forEach(btn => btn.hidden = true)
}
