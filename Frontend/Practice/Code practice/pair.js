const nums = [1, 2, 2, 1];
const k = 1;
function pair(nums, k) {
  const map = {};
  let count = 0;

  for (let num of nums) {
    if (map[num - k]) count += map[num - k];
    if (map[num + k]) count += map[num + k];

    map[num] = (map[num] || 0) + 1;
  }

  return count;
}

const res = pair(nums, k);
console.log(res);
