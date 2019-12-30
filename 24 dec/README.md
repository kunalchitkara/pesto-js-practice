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

# [Substitution Cipher](https://www.notion.so/Substitution-Cipher-d81f25a128594a1487888280100c673b)
Encode string such that, A-Z and a-z are replaced with the corresponding letter, of the same case, shifted 4 or 6 letters to the right. 

'A' is shifted 4, 'B' is shifted 6, 'C' is shifted 4, 'D' is shifted 6, etc... The same rule applies for the lower case letters.

If a letter is shifted past Z or z then it wraps back around to A or a and continues the remaining number of shifted positions.

All other characters are left unchanged.

### Example:

    A -> E (shifted right 4 letters)
    B -> H (shifted right 6 letters)
    Y -> C (shifted right 4 letters)
    Z -> F (shifted right 6 letters)

### Sample Test Cases

    expect(substitutionCipher('Aa Bb Cc Xx Yy Zz !?.\n')).toBe('Ee Hh Gg Dd Cc Ff !?.\n');
    expect(substitutionCipher('The Quick Brown Fox Jumped Over The Lazy Dog!')).toBe('Zni Uymgo Hxsat Lsd Pyqvij Sbix Zni Refc Jsk!');
    expect(substitutionCipher('Lorem ipsum dolor sit amet, consectetur adipiscing elit! Sed sit amet tortor id turpis pharetra ultricies eget ac ipsum.\nNam porttitor, ligula vitae tincidunt lacinia, lacus eros tempus neque, ac tincidunt nisi dui ac dui. Ut volutpat mi non velit varius, at scelerisque lorem efficitur. Etiam vitae molestie nibh. Integer quis arcu non tortor auctor viverra et at leo?\nSed lacinia nunc non est tincidunt, vel pellentesque magna finibus. Nullam sed lectus sed massa convallis posuere id in augue. Mauris pharetra felis erat, vitae condimentum nisi bibendum id. Vestibulum vitae neque a lectus gravida rhoncus lobortis id elit. Maecenas semper.'))
          .toBe('Rsxiq mvwyq jsrsx wmz eqiz, gstwigzizyx ejmvmwgmtk irmz! Wij wmz eqiz zsxzsx mj zyxvmw vnexizxe yrzxmgmiw ikiz eg mvwyq.\nTeq vsxzzmzsx, rmkyre bmzei zmtgmjytz regmtme, regyw ixsw ziqvyw tiuyi, eg zmtgmjytz tmwm jym eg jym. Yz bsryzvez qm tst birmz bexmyw, ez wgirixmwuyi rsxiq illmgmzyx. Izmeq bmzei qsriwzmi tmhn. Mtzikix uymw exgy tst zsxzsx eygzsx bmbixxe iz ez ris?\nWij regmtme tytg tst iwz zmtgmjytz, bir virritziwuyi qekte lmtmhyw. Tyrreq wij rigzyw wij qewwe gstberrmw vswyixi mj mt eykyi. Qeyxmw vnexizxe lirmw ixez, bmzei gstjmqitzyq tmwm hmhitjyq mj. Biwzmhyryq bmzei tiuyi e rigzyw kxebmje xnstgyw rshsxzmw mj irmz. Qeigitew wiqvix.');

# [Balanced Braces](https://www.notion.so/Balanced-Braces-f15abccc2d6d40fc8aeffe176525bbd2)
Determine if a string contains matching Braces, Brackets and Parentheses. Additionally all Braces, Brackets, and Parentheses must be nested correctly for JavaScript code.

All other characters in the string can be ignored.

**input**: String

**output**: true if all opening Braces/Brackets/Parentheses have matching closing Braces/Brackets/Parentheses that are correctly nested else false.

### Example

    "{}" => true
    "{()[{}[]]}" => true
    "{(})" => false
    "{()[}[]]}" => false
    "if(a==b) x = y;" => true
    "if(a==b x = y;" => false
    "if(x<10}(b++;}else{b+=10;}" => false
    
    // Sample test cases
    expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}}')).toBe(true);
    expect(balancedBraces('for(i=0;i<x[i];i++){if(x[i]<10){b++;}else{b+=10;}')).toBe(false);