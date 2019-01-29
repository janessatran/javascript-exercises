const snakeCase = function(str) {
    var newStr = str.replace(/\.\./g, " ")
    
    // indexOf returns -1 if not found
    if (newStr.indexOf(" ") < 0) {
        newStr = newStr.replace( /([A-Z])/g, " $1");
    }
    newStr = newStr.trim()
        .toLowerCase()
        .replace(/[,?.]/g, "")
        .replace(/\-/g, " ")
        .split(" ")
        .join("_");
    return newStr;
}

module.exports = snakeCase
