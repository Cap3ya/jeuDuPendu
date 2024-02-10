export function getAlphabet() {
    const CHARCODE_A = 97; 
    const CHARCODE_Z = 122;

    const alphabet = []
    for (let i = CHARCODE_A; i <= CHARCODE_Z; i++) {
        alphabet.push(String.fromCharCode(i));
    }

    return alphabet;
}
