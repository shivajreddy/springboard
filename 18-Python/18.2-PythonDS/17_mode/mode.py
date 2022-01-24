def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """


    count_dict = {}

    for num in nums:

      if num in count_dict.keys():
        count_dict[num] += 1
      else:
        count_dict[num] = 1
    
    return max(count_dict,key=count_dict.get)