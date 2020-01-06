const constants = {
    VALID_BRACES: [
        '{',
        '[',
        '(',
        '}',
        ']',
        ')'
    ]
}

const util = {
    isValidBrace: (char) => {
        return constants.VALID_BRACES.includes(char);
    },
    isStartingBrace: (char) => {
        return constants.VALID_BRACES.indexOf(char) < 3;
    },
    isEndingBrace: (char) => {
        return constants.VALID_BRACES.indexOf(char) > 2;
    },
    matchingBrace: (char) => {
        const c = constants.VALID_BRACES.indexOf(char);
        if (c < 3)
            return constants.VALID_BRACES[c + 3];
        else
            return constants.VALID_BRACES[c - 3];
    },
}

function balancedBraces(statement) {
    if (typeof statement !== 'string')
        throw new Error('Invalid Input, expecting string');
    if (statement.length === 0) {
        return true;
    }

    var arr = [];
    for (var i = 0; i < statement.length; i++) {
        var char = statement[i];
        if (util.isValidBrace(char)) {
            if (util.isStartingBrace(char)) {
                arr.push(char);
            }
            else if (util.isEndingBrace(char)) {
                if (arr.length === 0 || arr[arr.length - 1] !== util.matchingBrace(char))
                    return false;
                arr.pop();
            }
        }
    }
    return (arr.length === 0);
}

module.exports = balancedBraces;