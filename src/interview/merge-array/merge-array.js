//Дано 2 отсортированных массива, соединить их в один и отсортировать
export const mergeArray = (nums1, nums2) => {
  const sorted = [];

  while (nums1.length && nums2.length) {
    if (nums1[0] <= nums2[0]) sorted.push(nums1.shift());
    if (nums1[0] >= nums2[0]) sorted.push(nums2.shift());
  }

  return [...sorted, ...nums1, ...nums2];
};
