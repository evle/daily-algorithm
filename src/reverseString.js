
/**
 * @description  ["h","e","l","l","o"] => ["o","l","l","e","h"]
 */
function reverseString(str = ["o", "l", "l", "e", "h"]) {
    let leftIdx = 0, rightIdx = str.length - 1;
    for (let i = 0; i < str.length; i++) {
        if (leftIdx !== rightIdx) {
            console.log(leftIdx)
            [str[leftIdx], str[rightIdx]] = [str[rightIdx], str[leftIdx]] 
            leftIdx++
            rightIdx--
        }
    }

}

console.log(reverseString())

module.exports = reverseString