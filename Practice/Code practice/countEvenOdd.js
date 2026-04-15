const arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function countEvenOdd(arr) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even += 1;
    } else {
      odd += 1;
    }
  }
  return { even, odd };
}
const res = countEvenOdd(arr);
console.log(res);
