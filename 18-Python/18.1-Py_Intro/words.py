
# step 1
def print_upper_words_1(words):
  """converts each word in the list into UPPERCASE """

  for word in words:
    print(word.upper())
  
# Step 2
def print_upper_words_2(words):
  """returns words that start with letter e"""

  for word in words:
    if word[0] == 'e':
      print(word)


# Step 3
def print_upper_words_3(words, chars):
  """print every word if it's first char is in chars hashmap"""

  for word in words:
    if word[0] in chars:
      print(word)


print_upper_words_1(["hello", "hey", "goodbye", "yo", "yes"])
print_upper_words_2(["hello", "hey", "goodbye", "yo", "yes"])
print_upper_words_3(["hello", "hey", "goodbye", "yo", "yes"], chars={"h", "y"})
