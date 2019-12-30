const constants =
{
    BIG_JUMP: 6,
    SMALL_JUMP: 4,
    TOTAL_ALPHABETS: 26,
    UPPER_CASE_LOWER_LIMIT: 65,
    UPPER_CASE_UPPER_LIMIT: 90,
    LOWER_CASE_LOWER_LIMIT: 97,
    LOWER_CASE_UPPER_LIMIT: 122,
}

function getCharCodeUtil(c) {
    // get char code
    var code = c.charCodeAt(0);
    // return as is if not an alphabet
    if (code < constants.UPPER_CASE_LOWER_LIMIT)
        return code;

    // conversion needed if alphabet
    if (code <= constants.UPPER_CASE_UPPER_LIMIT) {
        code += code % 2 ? constants.SMALL_JUMP : constants.BIG_JUMP;
        return code > constants.UPPER_CASE_UPPER_LIMIT ? code - constants.TOTAL_ALPHABETS : code;
    }

    // again return as is if not an alphabet
    if (code < constants.LOWER_CASE_LOWER_LIMIT)
        return code;

    // conversion needed if alphabet
    if (code <= constants.LOWER_CASE_UPPER_LIMIT) {
        code += code % 2 ? constants.SMALL_JUMP : constants.BIG_JUMP;
        return code > constants.LOWER_CASE_UPPER_LIMIT ? code - constants.TOTAL_ALPHABETS : code;
    }

    // and yet again return as is if not an alphabet, covers non-ascii characters too
    return code;
}

function substitutionCipher(a) {
    if (typeof a !== 'string')
        throw new Error('Invalid input, string expected');

    var codes = a.split('').map(c => getCharCodeUtil(c));
    return String.fromCharCode(...codes);
}

module.exports = substitutionCipher;