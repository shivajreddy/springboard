from unittest import result


def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """

    result = ""
    key = 0
    for word in phrase.split(' '):
      word = word.capitalize()
      if key == 0:
        result += word
        key = 1
      else:
        result += " "
        result += word

    return result
