export const palindromeNumber = (num) => {
  return Number(num.toString().split("").reverse().join("")) === num;
};
