import { isPalindrome } from "../valid-palindrome.js";
// import { isPalindrome } from "../try-valid-palindrome.js";

describe("Leetcode 125 task: valid palindrome", () => {
  test("Палиндром", () => {
    const str = "A man, a plan, a canal: Panama";
    expect(isPalindrome(str)).toBeTruthy();
  });

  test("Не палиндром", () => {
    const str = "Hello world";
    expect(isPalindrome(str)).toBeFalsy();
  });

  test("Пустая строка", () => {
    const str = "";
    expect(isPalindrome(str)).toBeTruthy();
  });
});
