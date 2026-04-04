// arr = [3, 4, 5, 12, 1, 2];
// let max = arr[0];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (max < arr[i + 1]) {
//     max = arr[i + 1];
//   }

//   if (min > arr[i + 1]) {
//     min = arr[i + 1];
//   }
// }

// console.log(max);
// console.log(min);

// -----------------------------------------------------------------------------

// arr = [23.32, 22, 123, 234, 31, 2, 3123, 3211, 3123];

// let temp = 0;
// let sortedArray = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
//   sortedArray.push(temp);
// }
// console.log(sortedArray);

// ------------------------------------------------------------

// Linear Search done

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let target = 1;

// function linearSearch(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == target) {
//       return `Found at index ${i}`;
//     }
//   }
//   return `Target not Found`;
// }

// let res = linearSearch(arr, target);
// console.log(res);

//------------------------------------------------------------------------------------------------------------
