let dna = require("./brca1.json");
// let dna = "taaatgwwwwtaawwwtaawwwatgwtaa"

let starter = "atg";
let stoper = "taa";

let starterPosition = 0;
let stoperPosition = 0;
let arr = [];

while (dna.search(starter) !== -1) {
    starterPosition = dna.indexOf(starter);
    stoperPosition = dna.indexOf(stoper, starterPosition);

    if (starterPosition < stoperPosition) {
        let gene = dna.slice(starterPosition, stoperPosition + 3);
        arr.push(gene);
    }
    dna = dna.slice(stoperPosition + 3)
}

console.log(`Genes amount is ${arr.length}`)

let longestGeneLenght = 0;

arr.forEach((gene) => {
    if (longestGeneLenght < gene.length) {
        longestGeneLenght = gene.length
    }
})
// console.log(arr)
console.log(`Longest gene lenght is ${longestGeneLenght}`)
let shortestGeneLenght = longestGeneLenght
arr.forEach((gene) => {
    if (shortestGeneLenght > gene.length) {
        shortestGeneLenght = gene.length
    }
})
console.log(`Shortest gene lenght is ${shortestGeneLenght}`)