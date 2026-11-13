// function isDividedBy3Or7(num){
//     if(num % 3 === 0 || num % 7 === 0){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isDividedBy3Or7(21)); // true

// let num = 10;
// function NumberOfPrimeNumbers(m, n) {
//     let count = 0;
//     for(let i = m; i <= n; i++){
//         if(PrimeNumber(i)){
//             count++;
//         }
//     }
//     return count;
// }
// function PrimeNumber(num) {
//     for(let i = 2; i < num; i++){
//         if(num ==1){
//             return false;
//         }
//         if(num % i === 0){
//             return false;
//         }
//     }
//     return true;
// }

// console.log(NumberOfPrimeNumbers(1, 10)); // 4 

// function SumOfPrimeNumbers(m, n) {
//     let sum = 0;
//     for(let i = m; i <= n; i++){
//         if(PrimeNumber(i)){
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(SumOfPrimeNumbers(1, 10)); // 17

// function PrimeOrComposite(num) {
//     if(num <= 1){
//         return "Neither prime nor composite";
//     }
//     for(let i = 2; i < num; i++){
//         if(num % i === 0){
//             return "Composite";
//         }
//     }
//     return "Prime";
// }
// console.log(PrimeOrComposite(7)); // Prime
// console.log(PrimeOrComposite(10)); // Composite
// console.log(PrimeOrComposite(1)); // Neither prime nor composite


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function NumberofEvenNumbers(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }
// console.log(NumberofEvenNumbers(numbers)); // 5

// function NumberofEvenNumbers(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             sum += arr[i]*arr[i];
//         }
//     }
//     return sum;
// }
// console.log(NumberofEvenNumbers(numbers)); // 220

// function SumOfNUmbers(m, n) {
//     let sum = 0;
//     if( isNaN(m) || isNaN(n) ){
//         return "Invalid input";
//     }
//     for(let i = m; i <= n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(SumOfNUmbers(1, 10)); // 55
// // console.log(SumOfNUmbers(1, 'a')); // Invalid input

// function multiply(a, b) {
//     if( isNaN(a) || isNaN(b) ){
//         return "Invalid input";
//     }
//     return a*b;
// }
// console.log(multiply(5, 10));

// function getLastDigit(num) {
//     if( isNaN(num) ){
//         return "Invalid input";
//     }
//     return num%10;
// }
// console.log(getLastDigit(123)); // 3
// console.log(getLastDigit('a')); // Invalid input

// function getLength(str) {
//     if( typeof str !== 'string' ){
//         return "Invalid input";
//     }
//     return str.length;
// }
// console.log(getLength("Hello")); // 5
// console.log(getLength(123)); // Invalid input

// function sumDigits(num){
//     if( isNaN(num) ){
//         return "Invalid input";
//     }
//     let sum = 0;
//     while(num > 0){
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }
// console.log(sumDigits(123)); // 6

// function maxDigit(num){
//     if( isNaN(num) ){
//         return "Invalid input";
//     }
//     let max = 0;
//     while(num > 0){
//         let digit = num % 10;
//         if(digit > max){
//             max = digit;
//         }
//         num = Math.floor(num / 10);
//     }
//     return max;
// }
// console.log(maxDigit(123)); // 3

// function reverseNumber(num){
//     if( isNaN(num) ){
//         return "Invalid input";
//     }
//     let reversed = 0;
//     while(num > 0){
//         reversed = reversed * 10 + num % 10;
//         num = Math.floor(num / 10);
//     }
//     return reversed;
// }
// console.log(reverseNumber(123)); // 321

// function countWords(str){
//     if( typeof str !== 'string' ){
//         return "Invalid input";
//     }
//     let words = str.trim().split(/\s+/);
//     return words.length;
// }
// console.log(countWords("Hello World"));

// function PositiveFromArray(arr){
//     let newarr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >0){
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
// console.log(PositiveFromArray([-1, 2, -3, 4, -5])); // [2, 4]
// function JoinATworray(arr1, arr2){
//    let newarr = [];
//    for(let i = 0; i < arr1.length; i++){
//        newarr.push(arr1[i]);
//    }
//    for(let i = 0; i < arr2.length; i++){
//        newarr.push(arr2[i]);
//    }
//    return newarr;
// }

// console.log(JoinATworray([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]

// function DifferenceMaxMin(arr){
//     let max = arr[0];
//     let min = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     return max - min;
// }
// console.log(DifferenceMaxMin([1, 2, 3, 4, 5])); // 4

// function getOddNumbers(arr){
//     let newarr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
// console.log(getOddNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]

// function countDigits(num){
//     if( isNaN(num) ){
//         return "Invalid input";
//     }
//     let count = 0;
//     while(num > 0){
//         count++;
//         num = Math.floor(num / 10);
//     }
//     return count;
// }
// console.log(countDigits(12345)); // 5

// function swapFirstLast(arr){
//     if(arr.length < 2){
//         return arr;
//     }
//     let temp = arr[0];
//     arr[0] = arr[arr.length - 1];
//     arr[arr.length - 1] = temp;
//     return arr;
// }
// console.log(swapFirstLast([1, 2, 3, 4, 5])); // [5, 2, 3, 4, 1]

// function countCharacters(str, str2){
//     if( typeof str !== 'string' || typeof str2 !== 'string' ){
//         return "Invalid input";
//     }
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i].toLowerCase() === str2.toLowerCase()){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countCharacters("Hello", "l"));

// function countPositiveNegative(arr){
//     let positive = 0;
//     let negative = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             positive++;
//         } else if(arr[i] < 0){
//             negative++;
//         }
//     }
//     return {positive, negative};
// }
// console.log(countPositiveNegative([-1, 2, -3, 4, -5])); // {positive: 2, negative: 3}     

// function getEvenIndexElements(arr){
//     let newarr = [];
//     for(let i = 1; i < arr.length; i++){
//         if(i % 2 === 0){
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
// console.log(getEvenIndexElements([1, 2, 3, 4, 5])); // [1, 3, 5]

// function findMaxIndex(arr){
//     let max = arr[0];
//     let index = 0;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//             index = i;
//         }
//     }
//     return index;
// }
// console.log(findMaxIndex([1, 2, 30, 4, 5])); // 2

// function findMinIndex(arr){
//     let min = arr[0];
//     let index = 0;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//             index = i;
//         }
//     }
//     return index;
// }
// console.log(findMinIndex([1, 2, 30, 4, 5])); // 0

// function getFirstDigit(num){
//     if( isNaN(num) ){
//         return "Invalid input";
//     }
//     while(num >= 10){
//         num = Math.floor(num / 10);
//     }
//     return num;
// }
// console.log(getFirstDigit(12345)); // 1

// function countGreaterThan(arr, num){
//     if( isNaN(num) ){
//         return "Invalid input";
//     }
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > num){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countGreaterThan([1, 2, 3, 4, 5], 3)); // 2

// function countDigitsInString(str){
//     if( typeof str !== 'string' ){
//         return "Invalid input";
//     }
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(!isNaN(str[i]) && str[i] !== ' '){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countDigitsInString("Hello123")); // 3

// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sumArray([1, 2, 3, 4, 5])); // 15

// function findIndexOfElement(arr, num){
//     if( isNaN(num) ){
//         return "Invalid input";
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === num){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(findIndexOfElement([1, 2, 3, 4, 5], 3)); // 2

// function isPalindrome(num){
//     let str = num.toString();
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(123)); // false

// function secondLargest(arr){
//     let first = -Infinity;
//     let second = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > first){
//             second = first;
//             first = arr[i];
//         } else if(arr[i] > second && arr[i] !== first){
//             second = arr[i];
//         }
//     }
//     return second;
// }
// console.log(secondLargest([1, 2, 3, 4, 5])); // 4

// function frequentnumbers(arr){
//     let frequentnums = {};
//     for(let i = 0; i < arr.length; i++){
//         frequentnums[arr[i]] = (frequentnums[arr[i]] || 0) + 1;
//     }
//     return frequentnums;
// }
// console.log(frequentnumbers([1, 2, 2, 3, 3, 3, 6])); // { '1': 1, '2': 2, '3': 3 }

// function uniqueNumbers(arr){
//     let unique = [];
//     for(let i = 0; i < arr.length; i++){
//         if(unique.indexOf(arr[i]) === -1){
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(uniqueNumbers([1, 2, 2, 3, 3, 3, 6])); // [1, 2, 3, 6]
// function commonElements(arr1, arr2){
//     let common = [];
//     for(let i = 0; i < arr1.length; i++){
//         if(arr2.indexOf(arr1[i]) !== -1 && common.indexOf(arr1[i]) === -1){
//             common.push(arr1[i]);
//         }
//     }
//     return common;
// }
// console.log(commonElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])); // [4, 5]

// function mostFrequentElement(str){
//     let frequent = {};
//     for(let i = 0; i < str.length; i++){
//         frequent[str[i]] = (frequent[str[i]] || 0) + 1;
//     }
//     let max = 0;
//     let element = '';
//     for(let key in frequent){
//         if(frequent[key] > max){
//             max = frequent[key];
//             element = key;
//         }
//     }
//     return element;
// }
// console.log(mostFrequentElement("abcaab")); // a

// function reverseArray(arr){
//     let reversed = [];
//     for(let i = arr.length - 1; i >= 0; i--){
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

function mostFrequentInSequence(arr){
    let frequent = {};
    for(let i = 0; i < arr.length; i++){
        frequent[arr[i]] = (frequent[arr[i]] || 0) + 1;
    }
    let max = 0;
    let element = '';
    for(let key in frequent){
        if(frequent[key] > max){
            max = frequent[key];
            element = key;
        }
    }
    return element;
}
console.log(mostFrequentInSequence([1, 2, 2, 2, 3, 3, 6])); // 3

// function longestAcsendingSubsequenceCount(arr){
//     let count = 1;
//     let maxCount = 1;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > arr[i - 1]){
//             count++;
//             if(count > maxCount){
//                 maxCount = count;
//             }
//         } else {
//             count = 1;
//         }
//     }
//     return maxCount;
// }
// console.log(longestAcsendingSubsequenceCount([1, 2, 3, 1, 2, 3, 4])); // 4

function mostFrequentElementInArray(arr) {
    if (arr.length === 0) return null;

    let counts = new Map();
    let mostFrequent = arr[0];
    let maxCount = 0;

    for (let value of arr) {
        let count = (counts.get(value) || 0) + 1;
        counts.set(value, count);

        if (count > maxCount) {
            maxCount = count;
            mostFrequent = value;
        }
    }

    return mostFrequent;
}
console.log(mostFrequentElementInArray([1, 2, 3, 1, 2, 3, 4])); // 4
