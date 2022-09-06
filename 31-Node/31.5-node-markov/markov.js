/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
    // console.log("the chains are", this.hashmap);
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let hashmap = new Map();
    for (let idx = 0; idx < this.words.length; idx++) {
      const word = this.words[idx];
      const nextWord = this.words[idx + 1] || null;
      if (!hashmap.has(word)) {
        hashmap.set(word, []);
      }
      hashmap.get(word).push(nextWord);
    }
    this.hashmap = hashmap;
  }

  /** Pick a random number */
  static randomPick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    const result = [];
    const keys = Array.from(this.hashmap.keys());
    let randomWord = MarkovMachine.randomPick(keys);

    while (randomWord && result.length < numWords) {
      result.push(randomWord);

      // choose a new random word
      randomWord = MarkovMachine.randomPick(this.hashmap.get(randomWord));
    }

    // console.log("this is the result", result.join(" "));
    return result.join(" ");
  }
}

module.exports = MarkovMachine;
