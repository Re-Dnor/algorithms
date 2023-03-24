import { lengthOfLastWord } from "../length-of-last-word.js";
// import { lengthOfLastWord } from "../try-length-of-last-word.js";

describe("Leetcode 58 task: length of last word", () => {
  test("Одно слово", () => {
    const str = "Hello";
    expect(lengthOfLastWord(str)).toBe(5);
  });

  test("Короткая фраза", () => {
    const str = "Hello World";
    expect(lengthOfLastWord(str)).toBe(5);
  });

  test("Много пробелов", () => {
    const str = "   fly me   to   the moon  ";
    expect(lengthOfLastWord(str)).toBe(4);
  });

  test("Много пробелов", () => {
    const str = "";
    expect(lengthOfLastWord(str)).toBe(0);
  });
});
