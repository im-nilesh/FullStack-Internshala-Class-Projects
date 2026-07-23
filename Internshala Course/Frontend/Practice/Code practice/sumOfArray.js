let arr = [10, 20, 30, 40, 50];
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const res = sum(arr);
console.log(res);
