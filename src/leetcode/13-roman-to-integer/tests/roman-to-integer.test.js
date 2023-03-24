import { romanToInt } from "../roman-to-integer.js";
// import { romanToInt } from "../try-roman-to-integer.js";

describe("LeetCode 13 task: roman to integer", () => {
  test("Просто число", () => {
    const str = "V";
    expect(romanToInt(str)).toBe(5);
  });

  test("Уже посложнее", () => {
    const str = "LVIII";
    expect(romanToInt(str)).toBe(58);
  });

  test("3Это что вообще такое?", () => {
    const str = "MCMXCIV";
    expect(romanToInt(str)).toBe(1994);
  });
});
