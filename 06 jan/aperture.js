function aperture(n, arr) {
    var output = [];
    var currArray = [];
    arr.forEach(x => {
        currArray.push(x);
        if (currArray.length === n) {
            output.push(currArray);
            currArray = currArray.slice(1);
        }
    });
    return output;
}

module.exports = aperture;
