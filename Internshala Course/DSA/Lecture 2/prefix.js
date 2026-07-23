arr = [10, 20, 30, 40, 50];
function prefix(arr) {
  sum = 0;
  result = [];
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    result.push(sum);
  }
  return result;
}
const res = prefix(arr);
console.log(res);
