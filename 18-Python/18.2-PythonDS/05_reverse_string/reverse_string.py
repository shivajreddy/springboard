def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    l = len(phrase)
    result = ""
    for i in range(0,l):
      result += phrase[l-i-1]
    return result

print(reverse_string('awesome'))
print(reverse_string('sauce'))