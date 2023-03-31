import { isHappy } from "../happy-number.js";
// import { isHappy } from "../try-happy-number.js";

describe("Leetcode 202 task: happy number", () => {
  test("Тест 1", () => {
    const num = 19;
    expect(isHappy(num)).toBeTruthy();
  });

  test("Тест 2", () => {
    const num = 2;
    expect(isHappy(num)).toBeFalsy();
  });

  test("Тест 3", () => {
    const num = 31;
    expect(isHappy(num)).toBeTruthy();
  });
});
