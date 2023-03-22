export const jumpSearch = (nums, target) => {
  let len = nums.length;

  let step = Math.floor(Math.sqrt(len));

  let blockStart = 0,
    currentStep = step;

  while (nums[Math.min(currentStep, len) - 1] < target) {
    blockStart = currentStep;
    currentStep += step;

    if (blockStart >= len) return -1;
  }

  while (nums[blockStart] < target) {
    blockStart++;

    if (blockStart == Math.min(currentStep, len)) return -1;
  }

  if (nums[blockStart] == target) return blockStart;
  else return -1;
};
