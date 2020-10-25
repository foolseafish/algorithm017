/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0
    for (let i = 0, len = bills.length; i < len; i++) {
        let bill = bills[i];
        switch(bill) {
            case 5:
                five++;
                break;
            case 10:
                if (five === 0) {
                    return false;
                }
                ten++;
                five--;
                break;
            case 20:
                if(ten && five){
                    ten--;
                    five--;
                } else if (five >= 3) {
                    five -= 3;
                } else {
                    return false;
                }
            break;
        }
    }
    return true;
};
// @lc code=end

