const isPrime = (n) => {
    if (n <= 1) {
        return false;
        // return `${n} nie jest liczbą pierwszą`;
    }
        
    // Check from 2 to n-1
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
            // return `${n} nie jest liczbą pierwszą`;
        }
    }
  
    return true;
    // return `${n} jest liczbą pierwszą`;
}
const number = 2;
console.log(`Liczba ${number} jest liczbą pierszą?`, isPrime(number))

const returnFirstPrimeNumbers = (n) => {
    if (n < 0) {
        return "corner case";
    } else {
        let arr = []
        i = 1
            while (arr.length < n) {
                i++                
                if (isPrime(i)) {
                    arr.push(i)
                }
            }
        return arr;
    }

}

console.log(returnFirstPrimeNumbers(10))