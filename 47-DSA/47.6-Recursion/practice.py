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
  
  n += 1
  if n % 2 == 0:
    newStr += str[n]

# recursive call
  return everyOther(str, n, newStr)

# print(everyOther("hello", -1, ""))



# palindrome

def palindrome(str, start, end):

  if start >= end:
    return True

  # check for false
  # print("checking ", str[start], "vs", str[end])
  if str[start] != str[end]:
    return False
  
  start += 1
  end -= 1

  # recursive call
  palindrome(str, start, end)

  return True


# print(palindrome("tacocat", 0, 6))
# print(palindrome("tacodog", 0, 6))
# print(palindrome("appappa", 0, 6))


def isPalindrome(str, idx = 0):

  start = idx
  end = len(str) - idx -1

  if start >= end:
    return True
  
  if str[start] != str[end]:
    return False
  
  isPalindrome(str, idx+1)
  return True 

print(isPalindrome("tacocat"))
print(isPalindrome("tacodog"))
print(isPalindrome("appappa"))

def palindrome(str, idx=0):
  s = idx
  e = len(str) - 1

  if s >= e:
    return True

  if str[s] != str[e]:
    return False
  
  return palindrome(str, idx+1)

