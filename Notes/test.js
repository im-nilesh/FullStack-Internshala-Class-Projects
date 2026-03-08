// const arr = [1, 2, 3, 4, 5, 6];
// arr.splice(2, 1, 11, 12, 12, 12);
// console.log(arr);

const arr = [5, 4, 3, 2, 1, 6, 7];
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr.reverse());

console.log(Math.min(...arr));
