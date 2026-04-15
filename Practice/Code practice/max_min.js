arr = [20, 12, 13, 10, 22, 14];
function maxMin(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { max, min };
}

const res = maxMin(arr);
console.log(res);
