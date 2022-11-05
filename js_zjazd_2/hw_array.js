let arr = [1, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
// let arr = [1, 6, 23, 8, 4, 8, 3, 7];
// let arr = [1,6,3]

console.log("oryginalna tablica:", arr);

const arraySum = (array) => {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};
// console.log("suma elemnetów w tablicy:", arraySum(arr));

const firstAndLastSum = (array) => {
  return array[0] + array[array.length - 1];
};
// console.log("Suma pierwszego i ostatniego elementu tablicy:", firstAndLastSum(arr));

const arrayReverse = (array) => {
  let reversedArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
};
// console.log(arrayReverse(arr));

const randomNumberFromArray = (array, n) => {
  // n -> ilosc losowan
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr.push(array[Math.floor(Math.random() * array.length)]);
  }
  return Math.min(...newArr);
};
// console.log("Najmniejszy numer z tablicy przy n losowaniach", randomNumberFromArray(arr, 3));

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
// console.log("Pomieszana tablica:", shuffleArray(arr));


const sumOddElements = (array) => {
  let sum = 0;  
    for(let i = array.length - 1; i >= 0; i--) {
      if ((i+1) % 2 !== 0) {
            // console.log("parzysta:", array[i])
            sum += array[i];
          // } else {
          // console.log("nieparzysta:", array[i])
        }
    }
    return sum;
}
console.log("Suma elementów z nieparzystej pozycji w tablicy:", sumOddElements(arr))

const addingSubstractingItems = (array) => {
  let initialValue = 0;
  let evenItemsSum = 0;  
  let oddItemsSum = 0;  
  for(let i = array.length - 1; i >= 0; i--) {
    if ((i+1) % 2 === 0) {
          // console.log("parzysta:", array[i])
          evenItemsSum += array[i];
        } else {
          oddItemsSum += array[i];
        // console.log("nieparzysta:", array[i])
      }
  }
  return initialValue + evenItemsSum - oddItemsSum;
}
console.log("Wynik dodawania elementów z nieparzystej pozycji w tablicy i odejmowania elementów z parzystych pozycji w tablicy:", addingSubstractingItems(arr))