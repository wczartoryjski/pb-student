let height = 8;
let i = 0;
let hash = "#";
let space = " ";
let result = "";

for (let i = 1; i<=8; i++) {
    let spacesCount = height - i;
    let output = "";
    for (let j = 1; j<=spacesCount; j++) {
        output = output + " ";
    }
    for (let k=1;k<=i; k++) {
        output = output + "#"
    }
    output = output + " "
    for (let l=1; l<=i; l++) {
        output = output+ "#"
    }
    console.log(output)
}
