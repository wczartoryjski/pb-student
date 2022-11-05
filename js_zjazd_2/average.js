function calculateAverage(inputArray) {
  let sum = 0;

  inputArray.forEach((number) => {
    sum = sum + number;
  });
  return (sum/inputArray.length);
}


arr = [1,2];

let average = calculateAverage(arr)
console.log(average)