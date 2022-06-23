#1. Product of nums
# Write a function that finds the product of an array of numbers:
# product([2, 3, 4])   // 24

def product2(arr):
  # base condition
  if arr == []:
    return 1
  
  last = arr.pop()
  print('last is', last, 'arr is', arr)

  result = product(arr) * last

  print('result is', result)
  return result


def product(arr):

  # base condition
  if arr == []:
    return 1
  
  last = arr.pop()

  return product(arr)*last


print(product([2,3,4,5]))