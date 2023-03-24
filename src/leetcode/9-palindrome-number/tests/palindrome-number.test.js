import { palindromeNumber } from "../palindrome-number.js";
// import { palindromeNumber } from "../try-palindrome-number.js";

describe("Leetcode task 9: palindrome number", () => {
  test("Палиндром", () => {
    const num = 777;
    expect(palindromeNumber(num)).toBeTruthy();
  });

  test("Не палиндром", () => {
    const num = 123;
    expect(palindromeNumber(num)).toBeFalsy();
  });

  test("Простое число", () => {
    const num = 5;
    expect(palindromeNumber(num)).toBeTruthy();
  });
});
