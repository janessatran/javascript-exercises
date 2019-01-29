const repeatString = function(str, n) {
    if (n < 0) {
        return 'ERROR'
    }
    var result = '';
    for(var i = 0; i < n; i++) { 
        result += str
    }
    return result;
}

module.exports = repeatString
