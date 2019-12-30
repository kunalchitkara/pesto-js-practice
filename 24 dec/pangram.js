function isPangram(sentence = '') {
    var letterMap = {};
    sentence.split('').forEach(char => {
        letterMap[char.toLowerCase()] = true;
    });
    for (var i = 97; i <= 122; i++) {
        if (!letterMap[String.fromCharCode(i)]) {
            return false;
        }
    }
    return true;
}

module.exports = isPangram;