const palindromes = function(str) {

    var strippedWord = str.replace(/[^\w\s]|_/g, "")
                          .replace(/\s+/g, "")
                          .toLowerCase();
    var wordBackwards = '';
    
    for (i = strippedWord.length - 1; i >= 0; i--) {
        wordBackwards += strippedWord[i]
    }
    if (strippedWord == wordBackwards) return true;
    else return false;
}

module.exports = palindromes
