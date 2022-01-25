def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """

    lst1 = []
    lst2 = []

    for i in str(num1):
      lst1.append(int(i))
    
    for i in str(num2):
      lst2.append(int(i))

    lst1.sort()
    lst2.sort()

    if lst1 == lst2:
      return True
    
    return False