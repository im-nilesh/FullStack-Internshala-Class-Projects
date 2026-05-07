nums = [2, 7, 11, 15];
target = 9;

function twosum(nums, target) {
  let count = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    count = target - nums[i];
    if (map.has(count)) {
      return [map.get(count), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
}
console.log(twosum(nums, target));
