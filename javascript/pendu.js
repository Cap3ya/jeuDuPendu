const pendu = {
    errors: 0,
    MAX_ERRORS: 9,

    word: "",
    nWord: "",
    secret: [],

    setWord(word) {
        this.word = word;
        this.nWord = word.normalize("NFD").replace(/\p{Diacritic}/gu, "");
        this.setSecret();
    },

    setSecret() {
        const SPECIAL_CHARS = [" ", "-"];
        const secret = [...this.word];
        for (let i = 0; i < secret.length; i++) {
            if (!SPECIAL_CHARS.includes(secret[i])) {
                secret[i] = "_";
            }
        }
        this.secret = secret;
    },

    getSecret() {
        return this.secret.join("");
    },

    handleGuess(letter) {
        if (this.nWord.includes(letter)) {
            for (let i = 0; i < this.nWord.length; i++) {
                if (this.nWord.charAt(i) === letter)
                    this.secret[i] = this.word.charAt(i);
            }
        }
        else {
            this.incErrors();
        }
    },

    getRemainingErrors() {
        return this.MAX_ERRORS - this.errors;
    },

    incErrors() {
        this.errors += 1;
    },
}

export default pendu; 
