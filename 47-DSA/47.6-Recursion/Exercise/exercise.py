#1. Product of nums
# Write a function that finds the product of an array of numbers:
def product(arr):

  # base condition
  if arr == []:
    return 1
  
  last = arr.pop()

  return product(arr)*last

# product([2, 3, 4])   // 24
# print(product([2,3,4,5])) // 120

#2. Longest Word
def longest(arr):

  # base condition
  if arr == []:
    return 0
  
  size = len(arr.pop())

  return max(size, longest(arr))

# print(longest(["hello", "hi", "hola"]))

# call stack
#* longest([]) -> 0
#* longest(["hello"]) -> max(5, 0) -> 5
#* longest(["hello", "hi"]) -> max(2, 5) -> 5
#* longest(["hello", "hi", "hola"]) -> max(5, 4) -> 5


#3. Every other character

def everyOther(str, n, newStr):

  # base condition
  if n >= len(str):
    return newStr
  
  newStr += str[n]

  # recursive call
  return everyOther(str, n+2, newStr)

# print(everyOther("hello", 0, ""))  // "hlo"


def alternate(str, idx=0, result=""):
  if idx >= len(str):
    return result
  result += str[idx]
  return alternate(str, idx+2, result)

print(alternate("shiva", 0, ""))
print(alternate("shivaq", 0, ""))
