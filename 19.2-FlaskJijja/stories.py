"""Madlibs Stories."""

class Story:
    """Madlibs story.

    To  make a story, pass a list of prompts, and the text
    of the template.

        >>> s = Story(["noun", "verb"],
        ...     "I love to {verb} a good {noun}.")

    To generate text from a story, pass in a dictionary-like thing
    of {prompt: answer, promp:answer):

        >>> ans = {"verb": "eat", "noun": "mango"}
        >>> s.generate(ans)
        'I love to eat a good mango.'
    """

    def __init__(self, words, text):
        """Create story with words and template text."""

        self.prompts = words
        self.template = text

    def generate(self, answers):
        """Substitute answers into text."""

        text = self.template

        for (key, val) in answers.items():
            text = text.replace("{" + key + "}", val)

        return text

# Here's a story to get you started

story = Story(
    ["place", "noun", "verb", "adjective", "plural_noun"],
    """Once upon a time in a long-ago {place}, there lived a
       large {adjective} {noun}. It loved to {verb} {plural_noun}."""
)

# print(story.generate()) 

class MyStory():
    def __init__(self, arg1, arg2):
        self.aarg1 = arg1
        self.aarg2 = arg2
    
    def write(self, arg3):
        print(self.aarg2)
        print(self.aarg1)
        print(arg3)

mstory1 = MyStory(arg1="shiva", arg2="reddy")
mstory1.write(arg3="queue")

mstory2 = Story(words="words1", text="text1")
# mstory2.generate(answers="answer1")
# print(mstory2.generate(answers={k:"key1",v:"v1"}))
