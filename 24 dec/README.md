# [Break 1 Questions [Public]](https://www.notion.so/Break-1-Questions-Public-5950ecba1320468d8353e1690f4fc316)

## [Isomorphic](https://www.notion.so/Isomorphic-17ad260ad1484eaca9eb4d435b2b68d5)
Given two strings, determine if they are isomorphic. Two strings are isomorphic if they are the same length and you can replace all occurrences of each letter in the first string with the same letter to create the second string.

For example,"egg" and "add" are isomorphic, replace all occurrence of e with a and g with d. "paper" and "title" are also isomorphic. These strings are not isomorphic: "foo" and "bar", "it" and "odd".

### Sample Test Cases

    expect(isomorphic(['egg', 'add'])).toBe(true);
    expect(isomorphic(['foo', 'bar'])).toBe(false);
    expect(isomorphic(['asdfghjkl', 'qwertyuio'])).toBe(true);
    expect(isomorphic(['asdfgsjkl', 'qwertyuio'])).toBe(false);
    expect(isomorphic(['better', 'fetter'])).toBe(true);
