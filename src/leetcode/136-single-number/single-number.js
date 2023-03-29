export const singleNumber = (nums) => {
  return nums.reduce((acc, val) => acc ^ val);
};
