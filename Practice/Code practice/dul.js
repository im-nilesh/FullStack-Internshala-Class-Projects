arr = [1, 1, 2, 2, 3, 3, 4, 4];
function dul(arr) {
  let count = 0;
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      count++;
    } else {
      map.set(arr[i], i);
    }
  }
  return count;
}

console.log(dul(arr));
