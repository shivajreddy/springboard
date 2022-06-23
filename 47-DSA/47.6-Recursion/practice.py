# practise 1

# stack frame
# call stack


def longest(arr):

  # base condition
  if arr == []:
    return 0
  
  size = len(arr.pop())

  return max(size, longest(arr))

# print(longest(["hello", "hi", "hola"]))   // 5

# call stack
#* longest([]) -> 0
#* longest(["hello"]) -> max(5, 0) -> 5
#* longest(["hello", "hi"]) -> max(2, 5) -> 5
#* longest(["hello", "hi", "hola"]) -> max(5, 4) -> 5


# Every other character

def everyOther(str, n, newStr):

  # base condition
  if n >= len(str):
    return newStr
  
  newStr += str[n]

  # recursive call
  return everyOther(str, n+2, newStr)

print(everyOther("hello", 0, ""))

