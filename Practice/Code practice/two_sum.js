const nums = [2, 7, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];
    if (map.has(needed)) {
      return [map.get(needed), i];
    }
    map.set(nums[i], i);
  }
};

const res = twoSum(nums, target);
console.log(res);
