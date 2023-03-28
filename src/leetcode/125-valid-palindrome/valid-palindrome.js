export const isPalindrome = (str) => {
  const arr = str.split("").filter((letter) => letter.match(/[a-zA-Z0-9]/g));
  const lowerCase = arr.map((letter) => letter.toLowerCase());
  const string = lowerCase.join("");
  const reversed = lowerCase.reverse().join("");
  return string === reversed;
};
