export const containsDuplicate = (nums) => {
  const nSet = new Set(nums);
  return nSet.size !== nums.length;
};
