function findLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    return maxLength;
}

console.log(findLongestWord('The quick brown fox jumps over the lazy dog')); // Output: 5 (for the word 'jumps')