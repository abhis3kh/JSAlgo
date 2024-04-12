// Problem link : https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const numbers=s.split('');
    console.log(numbers)
    let count=0;
    for(let i=0;i<numbers.length;i++)
    {
        if (s[i] == 'I' && s[i+1] == 'V'){
                count = count + 4;
                i++;
            }
            else if (s[i] == 'I' && s[i+1] == 'X'){
                count = count + 9;
                i++;
            }
            else if (s[i] == 'X' && s[i+1] == 'L'){
                count = count + 40;
                i++;
            }
            else if (s[i] == 'X' && s[i+1] == 'C'){
                count = count + 90;
                i++;
            }
            else if (s[i] == 'C' && s[i+1] == 'D'){
                count = count + 400;
                i++;
            }
            else if (s[i] == 'C' && s[i+1] == 'M'){
                count = count + 900;
                i++;
            }
            else if (s[i] == 'V'){
                count = count + 5;
            }
            else if (s[i] == 'L'){
                count = count + 50;
            }
            else if (s[i] == 'D'){
                count = count + 500;
            }
            else if (s[i] == 'M'){
                count = count + 1000;
            }
            else if(s[i] == 'I'){
                count++;
            }
            else if (s[i] == 'X'){
                count = count + 10;
            }
            else if (s[i] == 'C'){
                count = count + 100;
            }  
        }
        return count;

};