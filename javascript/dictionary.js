import wordList from './wordList.js'

const dictionary = {
    wordList: wordList,

    getWord() {
        const length = this.wordList.length;
        const index = Math.floor(length * Math.random());
        return this.wordList[index];
    }
}

export default dictionary;
