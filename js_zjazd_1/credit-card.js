// let cardNumber = "924803";
// let cardNumber = "371473544343460" //American Express
// let cardNumber = "371473544543460" //American Express INVALID
// let cardNumber = "344583622277119" //American Express
// let cardNumber = "344583612277119" //American Express INVALID
// let cardNumber = "5436362071155086" //Mastercard
// let cardNumber = "5436162071155086"; //Mastercard INVALID
// let cardNumber = "4556180582215422" //VISA 16digit
// let cardNumber = "4556181582215422" //VISA 16digit INVALID
let cardNumber = "4782765601169" //VISA 13digit
// let cardNumber = "4782761601169" //VISA 13digit INVALID
// let cardNumber = "1231231231231231" //INVALID
// let cardNumber = "343123123121231" //INVALID

// console.log(cardNumber)
if (cardNumber.length === 13) {
  cardNumber = cardNumber + "000";
}
// console.log(cardNumber)
let numberToCheckLength = cardNumber.length - 1;
let lastDigit = cardNumber.slice(numberToCheckLength);
let numberToCheck = cardNumber.slice(0, numberToCheckLength);
let sum = 0;

for (i = 0; i < numberToCheckLength; i++) {
  let multiplier = 1;
  if ((numberToCheckLength - i) % 2 !== 0) {
    multiplier = 2;
  }
  if (cardNumber[i] * multiplier < 10) {
    sum = sum + cardNumber[i] * multiplier;
  } else {
    sum = sum + cardNumber[i] * multiplier - 9;
  }
  // console.log(`[${numberToCheckLength-i}] ${cardNumber[i]} x ${multiplier}`)
}
// console.log(`Suma kontrolna: ${sum}`)
let moduloRest = sum % 10;
// console.log(`Wynik Modulo: ${moduloRest}`)
let calculatedLastDigit = 0;
if (moduloRest !== 0) {
  calculatedLastDigit = 10 - moduloRest;
}
// console.log(`Ostatnia cyfra według wyliczeń: ${calculatedLastDigit}; Ostatnia cyfra z numeru karty: ${lastDigit}`)
if (
  calculatedLastDigit != lastDigit ||
  !(cardNumber.length === 15 || cardNumber.length === 16)
) {
  //porównanie różnych typów zmiennej
  console.log("INVALID");
} else {
  // console.log(cardNumber.slice(0,2))
  // console.log(cardNumber.length)
  if (
    cardNumber.slice(0, 1) == 4 &&
    (cardNumber.length === 13 || cardNumber.length === 16)
  ) {
    console.log("VALID Visa card");
  } else if (cardNumber.length === 15) {
    switch (cardNumber.slice(0, 2)) {
      case "34":
        console.log("VALID American Express card");
        break;
      case "37":
        console.log("VALID American Express card");
        break;
      default:
        console.log("VALID unknown card");
    }
  } else if (cardNumber.length === 16) {
    switch (cardNumber.slice(0, 2)) {
      case "51":
        console.log("VALID MasterCard card");
        break;
      case "52":
        console.log("VALID MasterCard card");
        break;
      case "53":
        console.log("VALID MasterCard card");
        break;
      case "54":
        console.log("VALID MasterCard card");
        break;
      case "55":
        console.log("VALID MasterCard card");
        break;
      default:
        console.log("VALID unknown card");
    }
  }
}
