import { uniquePaths } from "../unique-paths.js";
// import { uniquePaths } from "../try-unique-paths.js";

describe("LeetCode 62 task: unique paths", () => {
  test("Маленькое поле", () => {
    const m = 3;
    const n = 2;

    expect(uniquePaths(m, n)).toBe(3);
  });

  test("Среднее поле", () => {
    const m = 3;
    const n = 7;

    expect(uniquePaths(m, n)).toBe(28);
  });

  test("Большое поле", () => {
    const m = 10;
    const n = 10;

    expect(uniquePaths(m, n)).toBe(48620);
  });
});
