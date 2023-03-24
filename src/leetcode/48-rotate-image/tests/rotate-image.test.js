import { rotate } from "../rotate-image.js";
// import { rotate } from "../try-rotate-image.js";

describe("Leetcode 48 task: rotate image", () => {
  test("2 x 2", () => {
    const matrix = [
      [1, 2],
      [4, 5],
    ];
    expect(rotate(matrix)).toEqual([
      [4, 1],
      [5, 2],
    ]);
  });

  test("3 x 3", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(rotate(matrix)).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  test("4 x 4", () => {
    const matrix = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    expect(rotate(matrix)).toEqual([
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ]);
  });

  test("5 x 5", () => {
    const matrix = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ];
    expect(rotate(matrix)).toEqual([
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5],
    ]);
  });
});
