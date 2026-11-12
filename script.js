function isDividedBy3Or7(num){
    if(num % 3 === 0 || num % 7 === 0){
        return true;
    } else {
        return false;
    }
}
console.log(isDividedBy3Or7(21)); // true

let num = 10;
function NumberOfPrimeNumbers(m, n) {
    let count = 0;
    for(let i = m; i <= n; i++){
        if(PrimeNumber(i)){
            count++;
        }
    }
    return count;
}
function PrimeNumber(num) {
    for(let i = 2; i < num; i++){
        if(num ==1){
            return false;
        }
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(NumberOfPrimeNumbers(1, 10)); // 4 

function SumOfPrimeNumbers(m, n) {
    let sum = 0;
    for(let i = m; i <= n; i++){
        if(PrimeNumber(i)){
            sum += i;
        }
    }
    return sum;
}
console.log(SumOfPrimeNumbers(1, 10)); // 17

function PrimeOrComposite(num) {
    if(num <= 1){
        return "Neither prime nor composite";
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return "Composite";
        }
    }
    return "Prime";
}
console.log(PrimeOrComposite(7)); // Prime
console.log(PrimeOrComposite(10)); // Composite
console.log(PrimeOrComposite(1)); // Neither prime nor composite


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function NumberofEvenNumbers(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(NumberofEvenNumbers(numbers)); // 5

function NumberofEvenNumbers(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            sum += arr[i]*arr[i];
        }
    }
    return sum;
}
console.log(NumberofEvenNumbers(numbers)); // 220

function SumOfNUmbers(m, n) {
    let sum = 0;
    if( isNaN(m) || isNaN(n) ){
        return "Invalid input";
    }
    for(let i = m; i <= n; i++){
        sum += i;
    }
    return sum;
}
console.log(SumOfNUmbers(1, 10)); // 55
console.log(SumOfNUmbers(1, 'a')); // Invalid input