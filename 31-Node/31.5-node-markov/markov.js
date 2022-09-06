/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
    // var hashmap = {};
    this.hashmap = {};
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    for (let idx = 0; idx < this.words.length; idx++) {
      const word = this.words[idx];
      // const otherWords = words.slice(idx + 1);
      const nextWord = this.words[idx + 1] || null;
      console.log("this is the hashmap", this.hashmap);
      if (this.hashmap && !this.hashmap[word]) {
        this.hashmap[word] = nextWord;
      }
    }
    return this.hashmap;
  }

  /** Pick a random number */
  static randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    const keys = Object.keys(this.hashmap);
    let randomWord = MarkovMachine.randomPick(keys);
    const result = [];

    while (result.length < numWords && randomWord !== null) {
      result.push(randomWord);
      randomWord = MarkovMachine.randomPick(this.hashmap[randomWord]);
    }

    return result.join(" ");
  }
}

// export default MarkovMachine;
module.exports = MarkovMachine;
