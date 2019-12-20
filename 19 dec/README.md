# [1 better-string-lib](https://www.notion.so/better-string-lib-54ca68bd8f5d45dbb53e454de55cfe86)

You need to create a small string library containing two functions. Your functions should not restrict itself with ASCII-only input strings.

The functions are —

- **reverse(str)** — reverses a given string

    reverse('ab');
    // 'ba'
    
    reverse('foo 𝌆 bar');
    // rab 𝌆 oof
    
    reverse('mañana mañana');
    // anañam anañam

- **equal(str1, str2)** — returns `true` when the strings are equivalent, `false` otherwise

    equal('a', 'a');
    // true
    
    equal('mañana', 'mañana')
    // true

# [2 freq-sort](https://www.notion.so/freq-sort-203e8127369d453c85581fc50f3d003a)

Sort an array by frequency and then filter repeats.

**Don't use `for` loops.**

Example —

    frequencySort(['a', 'z', 'z', 'z', 'b', 'b', 'z'])
    // [ 'z', 'b', 'a' ]