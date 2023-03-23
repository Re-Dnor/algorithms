export const twoSum = function (nums, target) {
  const cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (cache.has(diff)) {
      return [cache.get(diff), i];
    } else {
      cache.set(nums[i], i);
    }
  }

  return [-1, -1];
};
