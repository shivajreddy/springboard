def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?
    
        >>> single_letter_count('Hello World', 'h')
        1
        
        >>> single_letter_count('Hello World', 'z')
        0
        
        >>> single_letter_count("Hello World", 'l')
        3
    """
    word = word.lower()
    letter = letter.lower()
    count = 0
    for i in word:
      if i == letter:
        count += 1
    return count

print(single_letter_count('Hello World', 'L'))