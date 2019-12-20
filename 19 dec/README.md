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
