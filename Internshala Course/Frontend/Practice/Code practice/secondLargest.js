arr = [20, 10, 30, 40, 50];
function secondLargest(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr[-2];
}
const res = secondLargest(arr);
console.log(res);
