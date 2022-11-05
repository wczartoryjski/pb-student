const printFibonacciNumbers = (n) => {
    if (n < 0 ) {
        return "Podana liczba jest nieprawidłowa";
    } else if (n === 0 ) {
        return [0]
    } else if (n === 1 ) {
        return [0,1]
    } else {
        let arr = printFibonacciNumbers(n - 1)
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        return arr
    }
}

console.log(printFibonacciNumbers(5))