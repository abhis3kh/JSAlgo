// Problem Link : https://leetcode.com/problems/palindrome-number/description/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str=x+"";
    let left=0;right=str.length-1;

    while(right >left)
    {
        if(str[left] !== str[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
};