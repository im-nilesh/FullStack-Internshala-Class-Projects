let nums1 = [2, 3, 2];
let nums2 = [1, 2];

function common(nums1, nums2) {
  let count1 = 0;
  let count2 = 0;
  let s1 = new Set(nums1);
  let s2 = new Set(nums2);

  for (let i = 0; i < nums1.length; i++) {
    if (s2.has(nums1[i])) {
      count1 += 1;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (s1.has(nums2[i])) {
      count2 += 1;
    }
  }

  return [count1, count2];
}

const res = common(nums1, nums2);
console.log(res);
