arr = [3, 4, 5, 12, 1, 2];
let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i + 1]) {
    max = arr[i + 1];
  }

  if (min > arr[i + 1]) {
    min = arr[i + 1];
  }
}

console.log(max);
console.log(min);
