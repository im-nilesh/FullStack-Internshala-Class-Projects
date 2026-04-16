let nums1 = [2, 3, 2];
let nums2 = [1, 2];
function common(nums1, nums2) {
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        count1 += 1;
      }
      break;
    }
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums2[j] === nums1[i]) {
          count2 += 1;
        }
        break;
      }
    }
    return { count1, count2 };
  }
}

const res = common(nums1, nums2);
console.log(res);
// wrong but can be fixed
