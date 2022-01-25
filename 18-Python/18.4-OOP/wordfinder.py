"""Word Finder: finds random words from a dictionary."""
from random import randint, random


class WordFinder:

    # properties
    def __init__(self, path):
        self.path = path
        self.wordCount = None
        self.wordList = self.getTotal()

    def __repr__(self) -> str:
        return f"Total of {self.wordCount} read"

    # methods
    # For path of instance, get total words and words list
    def getTotal(self):
        """For path of instance, get total words and words list"""
        wordList = []
        filePath = self.path
        file = open(filePath)
        for line in file.readlines():
            line = line[:-1]
            wordList.append(line)
        self.wordCount = len(wordList)
        return wordList


    def random(self):
        """Get a random word from the list of the words"""
        randomInt = randint(0,self.wordCount-1)
        return self.wordList[randomInt]


class SpecialWordFinder(WordFinder):

    # properties
    def __init__(self, path):
        super().__init__(path)

    
    def getTotal(self):
        """Get Total word count and words List"""
        wordList = []
        filePath = self.path
        file = open(filePath)
        for line in file.readlines():
            line = line[:-1]
            if len(line) > 0 and line[0] != "#" :
                wordList.append(line)
        self.wordCount = len(wordList)
        return wordList

    def random(self):
        return super().random()

w = SpecialWordFinder('subwords.txt')
print(w.random())