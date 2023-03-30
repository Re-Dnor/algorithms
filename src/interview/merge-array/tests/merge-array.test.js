import { mergeArray } from "../merge-array.js";
// import { mergeArray } from "../try-merge-array.js";

describe("Слияние массивов", () => {
  test("Последовательные массивы", () => {
    const nums1 = [1, 2, 3, 4, 5];
    const nums2 = [6, 7, 8, 9, 10];
    expect(mergeArray(nums1, nums2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("Пересекающие массивые", () => {
    const nums1 = [0, 5, 10, 15, 20];
    const nums2 = [-10, -5, 0, 1, 2, 3, 4, 5];
    expect(mergeArray(nums1, nums2)).toEqual([-10, -5, 0, 0, 1, 2, 3, 4, 5, 5, 10, 15, 20]);
  });

  test("С одним элементом массивы", () => {
    const nums1 = [1];
    const nums2 = [2];
    expect(mergeArray(nums1, nums2)).toEqual([1, 2]);
  });

  test("Пустые массивы", () => {
    const nums1 = [];
    const nums2 = [];
    expect(mergeArray(nums1, nums2)).toEqual([]);
  });
});
