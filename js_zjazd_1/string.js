// let text = ""
let text = "This is an example.";
// let text = "Some text longer than previous one, but still countable."
// let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

console.log(text);

let wordsNumber = 0;
let sentence = text.trim();

if (text.length > 0) {
  wordsNumber = sentence.split(" ").length;
}
console.log(`Given text have ${wordsNumber} words.`);

let aNumber = 0;

for (i = 0; i <= text.length; i++) {
  if (text[i] === "a" || text[i] === "A") {
    // if (text[i] === "A") {
    aNumber++;
  }
}
console.log(`Given text have ${aNumber} "A" letters`);

let longestWord = "";
let startIndex = 0;
let endIndex = 0;
let arr = sentence.split(" ");
arr.forEach((word) => {
  if (word.endsWith(",") || word.endsWith(".")) {
    word = word.slice(0, word.length - 1);
  }
  if (longestWord.length < word.length) {
    longestWord = word;
  }
});
console.log(`The longest word is "${longestWord}"`);

let amountOfWordsWithMaxLength = 0;
arr.forEach((word) => {
  if (word.endsWith(",") || word.endsWith(".")) {
    word = word.slice(0, word.length - 1);
  }
  if (longestWord.length === word.length) {
    amountOfWordsWithMaxLength++;
  }
});
console.log( `Amount of words with same length as the longest word is ${amountOfWordsWithMaxLength}`);
