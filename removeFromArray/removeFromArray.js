const removeFromArray = function(arr, ...rest) {
    var removeVals = rest;
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        var found = false;
        for(var j = 0; j < removeVals.length; j++) {
            if (arr[i] == removeVals[j]) {
                found = true;
                break;
            }
        }
        if (found == false) {
            result.push(arr[i]);
        }
   
    }
    return result;
}

module.exports = removeFromArray
