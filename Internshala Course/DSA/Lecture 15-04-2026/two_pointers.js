arr = [10, 20, 30, 40, 50];
function twoPointer(arr) {
  let j = arr.length - 1;
  let i = 0;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

const res = twoPointer(arr);
console.log(res);
