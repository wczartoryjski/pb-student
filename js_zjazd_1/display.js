let sentence = "Hello, this is my long sentence, please break it up on the display."
let displaySize = 12;

if (sentence.length <= displaySize) {
    console.log(sentence)
} else {
    while (sentence.length > displaySize) {
        let spaceIndex = sentence.lastIndexOf(" ", displaySize+1)
        let output = sentence.slice(0, spaceIndex)

        sentence = sentence.slice(spaceIndex)
        console.log(output)
    }
}
