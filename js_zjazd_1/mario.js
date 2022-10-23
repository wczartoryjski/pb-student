let height = 8;
let i = 0;
let hash = "#";
let space = " ";
let result = "";
// while (i < height) {
//     result = space + hash;
//     console.log(result);
//     hash = hash + "#";
//     space = space + " ";
//     i++;
// }
for (let i = 1; i<=8; i++) {
    let spacesCount = height - i;
    let output = "";
    for (let j = 1; j<=spacesCount; j++) {
        output = output + " ";
    }
    for (let k=1;k<=i; k++) {
        output = output + "#"
    }
    console.log(output)
}
