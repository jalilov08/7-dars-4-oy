/** DARSDAGILAR
 * const names = [
    "Nurmuhammad",
    "Firdavs",
    "Rahmonjon",
    "Dilmurodjon",
    "Farxodjon💔",
    "Eldorbek🍎",
    "Abdurahmonjon",
    "Abdulloh 2x",
  ];
  for (let i = 0; i < names.length; i++) {
    let jon= names[i];
    if (jon.includes("jon")) {
    console.log(jon);
    }
  }
 */

// VAZUFA
// 1--
// function getInitialOdds(n) {
//   const result = [];
//   let number = 1;
//   for (let i = 0; i < n; i++) {
//     result.push(number);
//     number += 2;
//   }
//   return result;
// }
// console.log(getInitialOdds(5)); 


//2--
// function getEvenReverse(arr) {
//   const result = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// let input = [4, 5, 7, 8, 6, 9];
// console.log(getEvenReverse(input));


//3--
// function rangeSum(arr, K, L) {
//   let sum = 0;
//   for (let i = K; i <= L; i++) {
//     sum += arr[i];
//   } 
//   return sum;
// }
// let inputArray = [1, 6, 9, 5, 8, 10, 15];
// let K = 2;
// let L = 5;
// console.log(rangeSum(inputArray, K, L)); 


//4--
// function getSingleArr(arr) {
//   let res;
//   let sum;
//   for (let num of arr) {
//     if (sum[num]) {
//       sum[num]++;
//     } else {
//       sum[num] = 1;
//     }
//   }
//   return res;
// }
// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];
// console.log(getSingleArr(arr)); 


//5--
// function cyclicShift(arr) {
//   let res = [...arr.slice(1), arr[0]];
//   return res;
// }
// let inputArray = [1, 5, 8, 9, 10];
// let sum = cyclicShift(inputArray);
// console.log(sum); 


//6--
// function getLevel2(n) {
//   let res;
//   let sum = 1;
//   for (let i = 0; i < n; i++) {
//     const value = 2 ** sum;
//     res.push(value);
//     sum += 2;
//   }
//   return res;
// }
// const number = 5;
// const outputArray = getLevel2(inputNumber);
// console.log(outputArray); 


//7--
// function reverseArray(arr) {
//   return arr.reverse();
// }
// const input = [1, 2, 3, 4, 5];
// const reversed = reverseArray(input);
// console.log(reversed); 
