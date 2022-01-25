def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        False
    """
    
    left1 = 0
    left2 = 0
    right1 = 0
    right2 = 0
    
    if len(parens) % 2 == 0:
      left = parens[:len(parens)/2]
      right = parens[len(parens)/2:]
    
    return False