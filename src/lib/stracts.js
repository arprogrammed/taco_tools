export function singleWordUpper(word) {
    let w1 = word.toLowerCase();
    let l1 = w1.charAt(0).toUpperCase();
    let w2 = w1.slice(1);
    return l1 + w2
}

export function truncAtor(string) {
    if (string.length >= 16) {
        return (string.substring(0, 15)+'...')
    } else {
        return string
    }
}