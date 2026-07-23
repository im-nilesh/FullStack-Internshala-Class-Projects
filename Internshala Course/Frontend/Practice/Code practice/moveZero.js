const arr = [1, 0, 10, 1, 0, 0, 1, 2, 0, 8, 0];
function moveZero(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }
  return arr;
}
const res = moveZero(arr);
console.log(res);
