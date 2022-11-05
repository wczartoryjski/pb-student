const exampleString = "ntest test";

const letterOffset = 13;

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

console.log(exampleString)
//funckja do zwracania zaszyfrowanego tesktu
const stringEncode = (str) => {
    let encodedStr = "";
    for (var i = 0; i < str.length; i++) {
        if (!alphabet.includes(str.charAt(i).toUpperCase())) {
            encodedStr += str.charAt(i);
        } else {
            const letterIndex = alphabet.indexOf(str.charAt(i).toUpperCase())
            if (letterIndex + letterOffset < alphabet.length) {
                encodedStr += alphabet[letterIndex + letterOffset]
            } else {
                encodedStr += alphabet[letterIndex + letterOffset - alphabet.length]
            }
        }
    }
    return encodedStr;
} 
console.log(stringEncode(exampleString))

//funckja do zwracania odszyfrowanego tesktu
const stringDecode = (str) => {
    let decodedStr = "";
    for (var i = 0; i < str.length; i++) {
        if (!alphabet.includes(str.charAt(i).toUpperCase())) {
            decodedStr += str.charAt(i);
        } else {
            const letterIndex = alphabet.indexOf(str.charAt(i).toUpperCase())
            if (letterIndex - letterOffset > 0) {
                decodedStr += alphabet[letterIndex - letterOffset]
            } else {
                decodedStr += alphabet[letterIndex - letterOffset + alphabet.length]
            }
        }
    }
    return decodedStr
} 
console.log(stringDecode(stringEncode(exampleString)))