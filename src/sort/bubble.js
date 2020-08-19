/**
 * @description 大的元素一轮一轮向后推
 * 
 *  3 2 1
 *  推一轮3
 *  2 3 1 
 *  2 1 3 
 *  推一轮2
 *  1 2 3
 */

function bubbleSort(arr = [51, 101, 4, 2, 3, 5, 8, 32, 2, 1]) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr
}

module.exports = bubbleSort