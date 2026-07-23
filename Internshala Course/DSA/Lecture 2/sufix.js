arr = [10, 20, 30, 40];
function suffix(arr) {
  res = [];
  sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    sum = sum + arr[i];
    res.push(sum);
  }
  return res.reverse();
}
let result = suffix(arr);
console.log(result);
