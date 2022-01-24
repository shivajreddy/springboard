def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    result = {}
    for char in phrase:
      if char not in result.keys():
        result[char] = 1
      else:
        result[char] += 1

    return result

