# [Coding Cleanly [Public]](https://www.notion.so/Coding-Cleanly-Public-516fb0909bb54f738badfa8138b4f030)

### Books

- *Structured Design: Fundamentals of a Discipline of Computer Program and Systems Design* — **Yourdon, Edward; Constantine, Larry L.**

## Exercises

# [Alternating Characters](https://www.notion.so/Alternating-Characters-6730dcaafcb14a36b5590e92ed6b3495)
Minimum number of deletions to make the alternating string for each string in array.

### Sample test cases

    expect(alternatingCharacters(['AAAA', 'BBBBB', 'ABABABAB', 'BABABA', 'AAABBB'])).toEqual([3, 4, 0, 0, 4]);
    expect(alternatingCharacters(['ABBABBAA'])).toEqual([3]);

# [Aperture](https://www.notion.so/Aperture-aff15bc42f414e47bf3adf6685a31bcb)
Returns a new list, composed of n-tuples of consecutive elements. If `n` is greater than the length of the list, an empty list is returned.

### Sample test cases

    aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
    aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    aperture(7, [1, 2, 3, 4, 5]); //=> []