export const binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) end = mid - 1;
    if (nums[mid] < target) start = mid + 1;
  }
  // Возвращаем индекс где должен находиться target если его нет в массиве
  return start;
};
