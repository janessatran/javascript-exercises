const reverseString = function(str) {
    var reversedStr = ''
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr
}

module.exports = reverseString
