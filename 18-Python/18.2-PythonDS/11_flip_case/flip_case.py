def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    result = ""

    for char in phrase:

      # if the char is equal to target.lower or target.upper
      if char == to_swap.upper() or char == to_swap.lower():
        char = char.swapcase()  

      result += char
    
    return result