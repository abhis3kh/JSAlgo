// Problem link : https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const mappingOfRomans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let totalCount = 0;

  for (let i = 0; i < s.length; i++) {
    const current = mappingOfRomans[s[i]];
    let next = mappingOfRomans[s[i + 1]];
    // Edge where the string ends
    if (next === undefined) {
      next = 0;
    }
    if (current >= next) {
      totalCount += current;
    } else {
      totalCount += next - current;
      i++;
    }
  }
  return totalCount;
};
