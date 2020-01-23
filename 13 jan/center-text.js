const BLANK_SPACE = ' ';
const EMPTY_STRING = ' ';

var alignmentUtil = {
    expandString(str = '', n) {
        if (str.length > n) {
            throw new Error(`Invalid Input: Word cannot be more than ${n} characters.`);
        }
        str = str.trim();
        if (str.length === n)
            return str;
        const left = parseInt((n - str.length) / 2);
        const right = n - (str.length + left);
        return str.padStart(left + str.length, BLANK_SPACE) + EMPTY_STRING.padEnd(right, BLANK_SPACE);
    }
}

function centerText(s = '', n = 0) {
    var words = s.split(' ');
    var sentences = [];
    var considerable = EMPTY_STRING;
    for (var i = 0; i < words.length; i++) {
        var toConsider = (considerable + BLANK_SPACE + words[i]).trim();
        if (toConsider.length > n) {
            const value = alignmentUtil.expandString(considerable.trim(), n);
            sentences.push(value);
            toConsider = words[i];
        }
        considerable = toConsider;
    }
    if (considerable.trim().length < n)
        sentences.push(alignmentUtil.expandString(considerable.trim(), n));
    return sentences;
}

module.exports = centerText;
