export const maxSubarray = (nums) => {
  if (nums.length <= 0) return -1;

  let prev = 0;
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(nums[i], prev + nums[i]);
    max = Math.max(prev, max);
  }

  return max;
};
