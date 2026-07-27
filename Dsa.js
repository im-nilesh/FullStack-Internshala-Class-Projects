// Problem 1

// const arr = [3, 9, 1, 7, 5];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }

// console.log(max);

// Problem 2

// function secondLargest(arr) {
//   if (arr.length < 2) return -1;

//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let num of arr) {
//     if (num > largest) {
//       secondLargest = largest;
//       largest = num;
//     } else if (num > secondLargest && num !== largest) {
//       secondLargest = num;
//     }
//   }

//   return secondLargest === -Infinity ? -1 : secondLargest;
// }
