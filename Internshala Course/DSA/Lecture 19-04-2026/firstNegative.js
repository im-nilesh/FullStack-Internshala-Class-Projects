let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let k = 3;
function firstNegative(arr, k) {
  let result = [];
  let neg = [];

  let i = 0,
    j = 0;

  while (j < arr.length) {
    if (arr[j] < 0) {
      neg.push(arr[j]);
    }

    if (j - i + 1 < k) {
      j++;
    } else {
      if (neg.length > 0) {
        result.push(neg[0]);
      } else {
        result.push(0);
      }

      if (arr[i] < 0) {
        neg.shift();
      }

      i++;
      j++;
    }
  }

  return result;
}

console.log(firstNegative(arr, k));
