export const interpolationSearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const rangeDelta = nums[right] - nums[left];
    const indexDelta = right - left;
    const valueDelta = target - nums[left];

    if (valueDelta < 0) {
      return -1;
    }
    if (!rangeDelta) {
      return nums[left] === target ? left : -1;
    }
    const middleIndex = left + Math.floor((valueDelta * indexDelta) / rangeDelta);

    if (nums[middleIndex] === target) {
      return middleIndex;
    }
    if (nums[middleIndex] < target) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }

  return -1;
};
