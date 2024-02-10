import { getAlphabet } from "./helpers.js";

const dom = {
    btnsLetter: [],
    btnStart: document.getElementById('btnStart'),
    buttons: document.getElementById('buttons'),
    secret: document.getElementById('secret'),
    image: document.getElementById('image'),
    info: document.getElementById('info'),

    setBtnsLetter() {
        const alphabet = getAlphabet();
        const root = this.buttons; 

        alphabet.forEach(letter => {
            const button = document.createElement('button');
            button.classList.add("btnsLetter");
            button.textContent = letter;
            root.appendChild(button);
            // getElementsByClassName
            this.btnsLetter.push(button);
        })
    },
}

export default dom; 